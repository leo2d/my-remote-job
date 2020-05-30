import cheerio from 'cheerio';
import fetchHtml from '../shared/fetchHtml';
import { formatToBRdate } from '../utils/dateFormater';
import ScrapedJob from '../shared/types/scrapedJob';
import Dictionary from '../shared/types/dictionary';
import Source from '../shared/source';

const scrapData = async () => {
    const $ = await getPageSelector();

    const firstPageJobs = extractJobs($, getUrl().baseUrl);

    const jobsPerPage = firstPageJobs.length;

    const pagesCount = getPagesCount($, jobsPerPage);

    const otherPagesJobs = await getAllJobs(2, pagesCount);

    const jobs = [...firstPageJobs, ...otherPagesJobs];

    return jobs;
};

const getAllJobs = async (pageStart = 1, pagesCount: number) => {
    let jobs = Array<ScrapedJob>();
    const { baseUrl } = getUrl();

    for (let page = pageStart; page <= pagesCount; page++) {
        const pageSelector = await getPageSelector(page);
        const pageJobs = extractJobs(pageSelector, baseUrl);

        jobs = [...jobs, ...pageJobs];
    }

    return jobs;
};

const getPageSelector = async (page = 1): Promise<CheerioStatic> => {
    const { url } = getUrl(page);
    const html = await fetchHtml(url);

    const $ = cheerio.load(html);

    return $;
};

const getPagesCount = ($: CheerioStatic, amountPerPage: number): number => {
    const jobsAmountText = $(
        '#job-search-form > div.grid.fd-row.jc-space-between.ai-center'
    )
        .find('div.grid--cell.js-search-title.-header.seo-header > span')
        .text();

    const total = parseInt(jobsAmountText.match(/\d+/)[0]);
    const pageCount = Math.ceil(total / amountPerPage);

    return pageCount;
};

const extractJobs = ($: CheerioStatic, baseUrl: string): ScrapedJob[] => {
    const jobs = Array<ScrapedJob>();

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

        const job: ScrapedJob = {
            title,
            company,
            location,
            date,
            employmentType: '',
            link,
            description: '-',
            source: Source.stackOverflow,
        };

        jobs.push(job);
    });

    return jobs;
};

const solveDate = (createdAt: string): string => {
    const match = createdAt.match(/(\d+).*([a-z])\s/);
    const key = match ? match[2] : createdAt;
    const time = parseInt(match?.[1]) || 0;

    const daysToSub = timeSwitch(key, time);
    const date = new Date();

    date.setDate(date.getDate() - daysToSub);

    return formatToBRdate(date);
};

const timeSwitch = (key: string, time: number): number => {
    const options: Dictionary<number> = {
        h: 0,
        d: time,
        yesterday: 1,
    };

    return options[key] || 0;
};

const getUrl = (page = 1) => {
    const baseUrl = 'https://stackoverflow.com/';
    return {
        baseUrl,
        url: `${baseUrl}/jobs?r=true&sort=p&pg=${page}`,
    };
};

export { scrapData as scrapStackoverflow };
