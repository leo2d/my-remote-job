import cheerio from 'cheerio';
import fetchHtml from './request';
import { formatToBRdate } from '../utils/dateFormater';

const timeSwitch = (keyWord, time) =>
  ({
    meses: 30 * time,
    mes: 30,
    dias: time,
    dia: 1,
    horas: 0,
    hora: 0,
  }[keyWord]);

const solveDate = jobDateStr => {
  const createdAt = jobDateStr.replace('ê', 'e');
  const match = createdAt.match(/(\d+)\s(\w+)\s/);
  const time = match[1];
  const keyWord = match[2];

  const dayToSub = timeSwitch(keyWord, time) || 0;
  const date = new Date();

  date.setDate(date.getDate() - dayToSub);

  return formatToBRdate(date);
};

const scrapData = async () => {
  const baseUrl = 'https://www.geekhunter.com.br';
  const html = await fetchHtml(
    `${baseUrl}/vagas?workType=remoto&page=1&order=new`
  );

  const $ = cheerio.load(html);

  const jobsContainer = $('body').find(
    'div.jobs-container > div.job > div.information'
  );

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

export { scrapData as scrapGeekhunterData };
