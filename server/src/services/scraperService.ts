import { scrapHipsters } from '../scrapers/hipsters';
import { scrapStackoverflow } from '../scrapers/stackOverflow';
import { scrapGeekhunter } from '../scrapers/geekhunter';
import { scrapProgramathor } from '../scrapers/programathor';
import Job, { JobModel } from '../models/job';
import ScrapedJob from '../shared/types/scrapedJob';
import Source from '../shared/source';

const getActiveJobsByLinks = async (links: string[]): Promise<JobModel[]> => {
    try {
        const jobs = await Job.find(
            { link: { $in: links }, isActive: true },
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
    try {
        const insertedjobs = await Job.insertMany(jobs);
        console.log('insertedjobs', insertedjobs);
    } catch (error) {
        throw error;
    }
};

const disableJobs = async (jobs: JobModel[]): Promise<any> => {
    try {
        if (!jobs) throw "Argument Exception: 'jobs' is not valid";

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

        if (existingJobs) {
            const newjobs = jobs.filter(
                job => !existingJobs.some(dbJob => dbJob.link === job.link)
            );

            const unavailableJobs = existingJobs.filter(
                dbJob => !jobs.some(job => job.link === dbJob.link)
            );

            await Promise.all([
                storeJobs(newjobs),
                disableJobs(unavailableJobs),
            ]).catch(error => {
                throw new Error(error);
            });
        } else {
            await storeJobs(jobs);
        }
    } catch (error) {
        console.log(error);
    }
};

const getScraperFunctionBySourceId = (
    sourceId: string
): (() => Promise<ScrapedJob[]>) => {
    switch (sourceId) {
        case Source.geekhunter.key:
            return scrapGeekhunter;
        case Source.hipsters.key:
            return scrapHipsters;
        case Source.stackOverflow.key:
            return scrapStackoverflow;
        case Source.programathor.key:
            return scrapProgramathor;
        default:
            throw new Error('Invalid Source');
    }
};

const updateData = async (sourceId: string): Promise<void> => {
    try {
        const scrap = getScraperFunctionBySourceId(sourceId);
        const jobs = await scrap();
        await updateJobs(jobs);
    } catch (error) {
        console.error(error);
    }
};

const createData = async (sourceId: string): Promise<void> => {
    try {
        const scrap = getScraperFunctionBySourceId(sourceId);
        const jobs = await scrap();
        await storeJobs(jobs);
    } catch (error) {
        console.error(error);
    }
};

const scrapData = async (sourceId: string): Promise<ScrapedJob[]> => {
    try {
        const scrap = getScraperFunctionBySourceId(sourceId);
        const jobs = await scrap();
        return jobs;
    } catch (error) {
        console.error(error);
    }
};

export default { createData, updateData, scrapData };
