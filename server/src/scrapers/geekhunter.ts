import cheerio from 'cheerio';
import { formatToBRdate } from '../utils/dateFormater';
import ScrapedJob from '../shared/types/scrapedJob';
import Dictionary from '../shared/types/dictionary';
import fetchHTML from '../shared/fetchHtml';
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
    const html = await fetchHTML(url);

    const $ = cheerio.load(html);

    return $;
};

const getPagesCount = ($: CheerioStatic, amountPerPage: number): number => {
    const totalText = $('body')
        .find('div.jobs-found > p')
        .last()
        .text();

    const total = parseInt(totalText.match(/\d+/)[0]);
    const pageCount = Math.ceil(total / amountPerPage);

    return pageCount;
};

const extractJobs = ($: CheerioStatic, baseUrl: string): ScrapedJob[] => {
    const jobs = Array<ScrapedJob>();

    const sourceId = Source.geekhunter.id;

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

        const job: ScrapedJob = {
            title,
            company: '',
            location,
            date,
            employmentType: '',
            link,
            description: '',
            sourceId,
        };

        jobs.push(job);
    });

    return jobs;
};

const solveDate = (jobDate: string): string => {
    const createdAt = jobDate.replace('ê', 'e');
    const match = createdAt.match(/(\d+)\s(\w+)\s/);
    const time = parseInt(match[1]);
    const keyWord = match[2];

    const daysToSub = timeSwitch(keyWord, time) || 0;
    const date = new Date();

    date.setDate(date.getDate() - daysToSub);

    return formatToBRdate(date);
};

const timeSwitch = (key: string, time: number): number => {
    const options: Dictionary = {
        meses: 30 * time,
        mes: 30,
        dias: time,
        dia: 1,
        horas: 0,
        hora: 0,
    };

    return options[key] || 0;
};

const getUrl = (page = 1) => {
    const baseUrl = 'https://www.geekhunter.com.br';
    return {
        baseUrl,
        url: `${baseUrl}/vagas?workType=remoto&page=1&order=new&page=${page}`,
    };
};

export { scrapData as scrapGeekhunterData };
