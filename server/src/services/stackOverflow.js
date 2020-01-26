import cheerio from 'cheerio';
import fetchHtml from './request';
import { formatToBRdate } from '../utils/dateFormater';

const scrapData = async () => {
  const $ = await getPageSelector();

  const firstPageJobs = extractJobs($, getUrl().baseUrl);

  const jobsPerPage = firstPageJobs.length;

  const pagesCount = getPagesCount($, jobsPerPage);

  const otherPagesJobs = await getAllJobs(2, pagesCount);

  const jobs = [...firstPageJobs, ...otherPagesJobs];

  return jobs;
};

const getAllJobs = async (pageStart = 1, pagesCount) => {
  let jobs = [];
  const { baseUrl } = getUrl();

  for (let page = pageStart; page <= pagesCount; page++) {
    const pageSelector = await getPageSelector(page);
    const pageJobs = extractJobs(pageSelector, baseUrl);

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
  const jobsAmountText = $('div#index-hed > div.js-search-title')
    .find('span.description')
    .first()
    .text();

  const total = jobsAmountText.match(/\d+/)[0];
  const pageCount = Math.ceil(total / amountPerPage);

  return pageCount;
};

const extractJobs = ($, baseUrl) => {
  let jobs = [];

  const results = $('body')
    .find("div[class='listResults']")
    .find('div.-job > div.grid > div.fl1 ');

  results.each((index, element) => {
    const title = $(element)
      .find('a.stretched-link')
      .text()
      .trim();

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

    const jobPath = $(element)
      .find('a.stretched-link')
      .attr('href')
      .trim();

    const link = `${baseUrl}${jobPath}`;

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

const solveDate = createdAt => {
  const match = createdAt.match(/(\d+).*([a-z])\s/);
  const key = match ? match[2] : createdAt;
  const time = match?.[1] || 0;

  const daysToSub = timeSwitch(key, time);
  const date = new Date();

  date.setDate(date.getDate() - daysToSub);

  return formatToBRdate(date);
};

const timeSwitch = (keyWord, time) =>
  ({
    h: 0,
    d: time,
    yesterday: 1,
  }[keyWord]);

const getUrl = (page = 1) => {
  const baseUrl = 'https://stackoverflow.com/';
  return {
    baseUrl,
    url: `${baseUrl}/jobs?r=true&sort=p&pg=${page}`,
  };
};

export { scrapData as scrapStackoverflow };
