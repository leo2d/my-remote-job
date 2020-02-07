import { scrapHipsters } from '../scrapers/hipsters';
import { scrapStackoverflow } from '../scrapers/stackOverflow';
import { scrapGeekhunter } from '../scrapers/geekhunter';
import { scrapProgramathor } from '../scrapers/programathor';
import Job from '../models/job';
import ScrapedJob from '../shared/types/scrapedJob';

const storeJobs = async (jobs: ScrapedJob[]) => {
    Job.insertMany(jobs, (error, docs) => {
        if (error) console.log(error);
        else console.log(docs);
    });
};
const storeHisptersData = async () => {
    const jobs = await scrapHipsters();

    try {
        await storeJobs(jobs);
    } catch (error) {
        console.log(error);
    }
};
const storeGeekHunterData = async () => {
    const jobs = await scrapGeekhunterData();

    try {
        await storeJobs(jobs);
    } catch (error) {
        console.log(error);
    }
};

const storeStackOverflowData = async () => {
    const jobs = await scrapStackoverflow();

    try {
        await storeJobs(jobs);
    } catch (error) {
        console.log(error);
    }
};

export {
    storeGeekHunterData,
    storeStackOverflowData,
    storeHisptersData,
    scrapGeekhunter,
    scrapHipsters,
    scrapProgramathor,
    scrapStackoverflow,
};
