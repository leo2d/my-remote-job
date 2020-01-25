import cheerio from 'cheerio';
import fetchHTML from './request';

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
    const pageJobs = extractJobs(pageSelector);

    jobs = [...jobs, ...pageJobs];
  }

  return jobs;
};

const getPageSelector = async (page = 1) => {
  const html = await fetchHTML(
    `https://hipsters.jobs/jobs/?city=Remote&page=${page}`
  );

  const $ = cheerio.load(html);

  return $;
};

const getPagesCount = ($, perPageAmount) => {
  const amountText = $('h1.search-results__title')
    .text()
    .trim();

  const totalAmount = amountText.match(/\d+\s/)[0];
  const pagesCount = Math.ceil(totalAmount / perPageAmount);

  return pagesCount;
};

const extractJobs = $ => {
  let jobs = [];

  const articles = $('body')
    .find("div[class='container']")
    .find('.search-results > article');

  articles.each((index, element) => {
    const location = $(element)
      .find(
        "span[class='listing-item__info--item listing-item__info--item-location']"
      )
      .text()
      .trim();

    const company = $(element)
      .find(
        "span[class='listing-item__info--item listing-item__info--item-company']"
      )
      .text()
      .trim();

    const employmentType = $(element)
      .find("span[class='listing-item__employment-type']")
      .text()
      .trim();

    const title = $(element)
      .find("a[class='link']")
      .text()
      .trim();

    const date = $(element)
      .find("div[class='listing-item__date']")
      .text()
      .trim();

    const link = $(element)
      .find("a[class='link']")
      .attr('href')
      .trim();

    const job = {
      title,
      company,
      location,
      date,
      employmentType,
      link,
    };

    jobs.push(job);
  });

  return jobs;
};

export { scrapData as scrapHipsters };
