import cheerio from 'cheerio';
import fetchHtml from './request';
import { formatToBRdate } from '../utils/dateFormater';

const baseUrl = _ => 'https://www.geekhunter.com.br';

const scrapData = async () => {
  const $ = await getSelector();
  const jobsContainer = getJobsContainer($);

  const pageCount = getPageCount($, jobsContainer.length);

  const jobs = await getAllJobs(pageCount);

  return jobs;
};

const getSelector = async (page = 1) => {
  const url = `${baseUrl()}/vagas?workType=remoto&page=1&order=new&page=${page}`;
  const html = await fetchHtml(url);

  const $ = cheerio.load(html);

  return $;
};

const getJobsContainer = $ => {
  const jobsContainer = $('body').find(
    'div.jobs-container > div.job > div.information'
  );

  return jobsContainer;
};

const getPageCount = ($, amountPerPage) => {
  const totalText = $('body')
    .find('div.jobs-found > p')
    .last()
    .text();

  const total = totalText.match(/\d+/)[0];

  const pageCount = Math.ceil(total / amountPerPage);
  return pageCount;
};

const getAllJobs = async pageCount => {
  let jobs = [];

  for (let i = 1; i <= pageCount; i++) {
    const $ = await getSelector(i);
    const jobsContainer = getJobsContainer($);
    const pageJobs = extractJobs($, jobsContainer, baseUrl());

    jobs = [...jobs, ...pageJobs];
  }

  return jobs;
};

const extractJobs = ($, jobsContainer, baseUrl) => {
  let jobs = [];

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

export { scrapData as scrapGeekhunterData };
