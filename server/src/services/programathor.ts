import cheerio from 'cheerio';
import Job from '../job/job';
import fetchHTML from './request';

const scrapData = async () => {
  const $ = await getPageSelector();

  const firstPageJobs = extractJobs($, getUrl().baseUrl);

  const jobsPerPage = firstPageJobs.length;

  return firstPageJobs;
};

const getPageSelector = async (page = 1): Promise<CheerioStatic> => {
  const { url } = getUrl(page);
  const html = await fetchHTML(url);

  const $ = cheerio.load(html);

  return $;
};

const extractJobs = ($: CheerioStatic, baseUrl: string) => {
  const jobs = Array<Job>();

  const jobsList = $('body')
    .find('div.wrapper-jobs-list > div.container > div.row')
    .find('div.col-md-9 > div.cell-list > a');

  jobsList.each((index, element) => {
    const title = $(element)
      .find('div.col-sm-9 > div.cell-list-content > h3')
      .text()
      .trim();

    const company = $(element)
      .find('div.cell-list-content-icon > span')
      .has('i.fa-briefcase')
      .text()
      .trim();

    const location = $(element)
      .find('div.cell-list-content-icon > span')
      .has('i.fa-map-marker-alt')
      .text()
      .trim();

    const employmentType = $(element)
      .find('div.cell-list-content-icon > span')
      .has('i.fa-file-alt')
      .text()
      .trim();

    const jobRoute = $(element)
      .attr('href')
      .trim();

    const link = `${baseUrl}${jobRoute}`;

    const job: Job = {
      title,
      company,
      location,
      date: '',
      employmentType,
      link,
    };

    jobs.push(job);
  });

  return jobs;
};

const getUrl = (page = 1) => {
  const baseUrl = 'https://programathor.com.br';
  return {
    baseUrl,
    url: `${baseUrl}/jobs-city/remoto?page=${page}`,
  };
};

export { scrapData as scrapProgramathor };
