import { scrapHipsters } from '../scrapers/hipsters';
import { scrapStackoverflow } from '../scrapers/stackOverflow';
import { scrapGeekhunter } from '../scrapers/geekhunter';
import { scrapProgramathor } from '../scrapers/programathor';
import Job, { JobModel } from '../models/job';
import ScrapedJob from '../shared/types/scrapedJob';

const storeJobs = async (jobs: ScrapedJob[]) => {
    Job.insertMany(jobs, (error, docs) => {
        if (error) console.log(error);
        else console.log(docs);
    });
};


const createHisptersData = async () => {
    const jobs = await scrapHipsters();

    try {
        await storeJobs(jobs);
    } catch (error) {
        console.log(error);
    }
};
const createGeekHunterData = async () => {
    const jobs = await scrapGeekhunter();

    try {
        await storeJobs(jobs);
    } catch (error) {
        console.log(error);
    }
};
const createStackOverflowData = async () => {
    const jobs = await scrapStackoverflow();

    try {
        await storeJobs(jobs);
    } catch (error) {
        console.log(error);
    }
};

export {
    createGeekHunterData,
    createStackOverflowData,
    createHisptersData,
    scrapGeekhunter,
    scrapHipsters,
    scrapProgramathor,
    scrapStackoverflow,
};
