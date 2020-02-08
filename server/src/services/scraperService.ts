import { scrapHipsters } from '../scrapers/hipsters';
import { scrapStackoverflow } from '../scrapers/stackOverflow';
import { scrapGeekhunter } from '../scrapers/geekhunter';
import { scrapProgramathor } from '../scrapers/programathor';
import Job, { JobModel } from '../models/job';
import ScrapedJob from '../shared/types/scrapedJob';
import { throws } from 'assert';

const getActiveJobsByLinks = async (links: string[]): Promise<JobModel[]> => {
    try {
        const jobs = await Job.find(
            { link: { $in: links, isActive: true } },
            (err, res) => {
                if (err) console.log(`ERROR : ${err}`);
                return res;
            }
        );

        return jobs;
    } catch (error) {
        console.log(error);
    }
    return null;
};

const storeJobs = async (jobs: ScrapedJob[]): Promise<any> => {
    Job.insertMany(jobs, (error, docs) => {
        if (error) console.log(error);
        else console.log(docs);
    });
};

const disableJobs = async (jobs: JobModel[]): Promise<any> => {
    try {
        const ids = jobs.map(x => x._id);

        await Job.updateMany(
            { _id: { $in: ids } },
            { $set: { isActive: false } },
            (err, raw) => {
                if (err) console.log(`ERROR : ${err}`);
                return raw;
            }
        );
    } catch (error) {
        console.error(error);
    }
};

const updateJobs = async (jobs: ScrapedJob[]) => {
    try {
        const scrapedlinks = jobs.map(job => job.link);
        const existingJobs = await getActiveJobsByLinks(scrapedlinks);

        const newjobs = jobs.filter(
            job => !existingJobs.some(dbJob => dbJob.link === job.link)
        );

        const unavailableJobs = existingJobs.filter(
            dbJob => !jobs.some(job => job.link === dbJob.link)
        );

        await Promise.all([
            storeJobs(newjobs),
            disableJobs(unavailableJobs),
        ]).catch(error => throws(error));
    } catch (error) {
        console.log(error);
    }
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

const updateStackoverflowData = async () => {
    try {
        const jobs = await scrapStackoverflow();
        await updateJobs(jobs);
    } catch (error) {
        console.log(error);
    }
};
const updateHipstersData = async () => {
    try {
        const jobs = await scrapHipsters();
        await updateJobs(jobs);
    } catch (error) {
        console.log(error);
    }
};
const updateGeekHunterData = async () => {
    try {
        const jobs = await scrapGeekhunter();
        await updateJobs(jobs);
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
    updateHipstersData,
    updateGeekHunterData,
    updateStackoverflowData,
};
