import cheerio from 'cheerio';
import fetchHtml from './request';
import { formatToBRdate } from '../utils/dateFormater';

const scrapData = async () => {
  const $ = await getPageSelector();

  const firstPageJobs = extractJobs($);

  const jobsPerPage = firstPageJobs.length;

  const pagesCount = getPagesCount($, jobsPerPage);

  const otherPagesJobs = await getAllJobs(2, pagesCount);

  const jobs = [...firstPageJobs, ...otherPagesJobs];

  return jobs;
};

const getAllJobs = async (pageStart = 1, pagesCount) => {
  let jobs = [];
  for (let page = pageStart; page <= pagesCount; page++) {
    const pageSelector = await getPageSelector(page);
    const pageJobs = extractJobs(pageSelector, getUrl().baseUrl);

    jobs = [...jobs, ...pageJobs];
  }

  return jobs;
};

const getPageSelector = async page => {
  const { url } = getUrl(page);
  const html = await fetchHtml(url);

  const $ = cheerio.load(html);

  return $;
};

const getPagesCount = ($, amountPerPage) => {
  const totalText = $('body')
    .find('div.jobs-found > p')
    .last()
    .text();

  const total = totalText.match(/\d+/)[0];
  const pageCount = Math.ceil(total / amountPerPage);

  return pageCount;
};

const extractJobs = ($, baseUrl) => {
  let jobs = [];

  const jobsContainer = $('body').find(
    'div.jobs-container > div.job > div.information'
  );

  jobsContainer.each((index, element) => {
    const title = $(element)
      .find('h2 > a')
      .text()
      .trim();

    const location = $(element)
      .find('div.company-detail > p.city')
      .contents()
      .first()
      .text()
      .trim();

    const createdAt = $(element)
      .find('small')
      .text()
      .trim()
      .toLowerCase();

    const date = solveDate(createdAt);

    const jobRoute = $(element)
      .find('h2 > a')
      .attr('href')
      .trim();

    const link = `${baseUrl}${jobRoute}`;

    const job = {
      title,
      company: '',
      location,
      date,
      employmentType: '',
      link,
    };

    jobs.push(job);
  });

  return jobs;
};

const solveDate = jobDateStr => {
  const createdAt = jobDateStr.replace('ê', 'e');
  const match = createdAt.match(/(\d+)\s(\w+)\s/);
  const time = match[1];
  const keyWord = match[2];

  const daysToSub = timeSwitch(keyWord, time) || 0;
  const date = new Date();

  date.setDate(date.getDate() - daysToSub);

  return formatToBRdate(date);
};

const timeSwitch = (keyWord, time) =>
  ({
    meses: 30 * time,
    mes: 30,
    dias: time,
    dia: 1,
    horas: 0,
    hora: 0,
  }[keyWord]);

const getUrl = (page = 1) => {
  const baseUrl = 'https://www.geekhunter.com.br';
  return {
    baseUrl,
    url: `${baseUrl}/vagas?workType=remoto&page=1&order=new&page=${page}`,
  };
};

export { scrapData as scrapGeekhunterData };
