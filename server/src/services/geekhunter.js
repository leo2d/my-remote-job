import cheerio from 'cheerio';
import fetchHtml from './request';
import { formatToBRdate } from '../utils/dateFormater';

const solveDate = createdAt => {
  const date = new Date();

  if (!createdAt.includes('horas')) {
    const match = createdAt.match(/(\d+).*([a-z])\s/);
    const time = match[1];

    if (createdAt.includes('mês')) {
      date.setDate(date.getDate() - 30);
    } else if (createdAt.includes('meses')) {
      date.setDate(date.getDate() - time * 30);
    } else if (createdAt.includes('dias')) {
      date.setDate(date.getDate() - time);
    } else if (createdAt.includes('dia')) {
      date.setDate(date.getDate() - 1);
    }
  }

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
