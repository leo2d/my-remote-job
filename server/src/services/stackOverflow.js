import cheerio from 'cheerio';
import fetchHTML from './request';

const solveDate = createdAt => {
  let date = new Date();
  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };

  if (createdAt === 'yesterday') {
    date.setDate(date.getDate() - 1);
  } else {
    const match = createdAt.match(/(\d+).*([a-z])\s/);

    const time = match[1];
    const indicator = match[2];

    if (indicator === 'd') {
      date.setDate(date.getDate() - time);
    }
  }

  const dateString = date.toLocaleDateString('pt-BR', options);
  const splitedDate = dateString.split('/');

  return `${splitedDate[1]}/${splitedDate[0]}/${splitedDate[2]}`;
};

const scrapData = async () => {
  const html = await fetchHTML('https://stackoverflow.com/jobs?r=true&sort=p');

  let jobs = [];

  const $ = cheerio.load(html);

  const results = $('body')
    .find("div[class='listResults']")
    .find('div.-job > div.grid > div.fl1 ');

  results.each((index, element) => {
    const title = $(element)
      .find('a.stretched-link')
      .text()
      .trim();

    const link = `https://stackoverflow.com${$(element)
      .find('a.stretched-link')
      .attr('href')
      .trim()}`;

    const company = $(element)
      .find('h3.fc-black-700')
      .children()
      .first()
      .text()
      .trim();

    const location = $(element)
      .find('h3.fc-black-700 > span.fc-black-500')
      .text()
      .trim();

    const createdAt = $(element)
      .find('div.mt2')
      .children()
      .first()
      .text()
      .trim();

    const date = solveDate(createdAt);

    const job = {
      title,
      company,
      location,
      date,
      employmentType: '',
      link,
    };

    jobs.push(job);
  });

  return jobs;
};

export { scrapData as scrapStackoverflow };
