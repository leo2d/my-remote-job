import { scrapHipsters } from '../../infra/scrapers/hipsters';
import { scrapStackoverflow } from '../../infra/scrapers/stackOverflow';
import { scrapGeekhunter } from '../../infra/scrapers/geekhunter';
import { scrapProgramathor } from '../../infra/scrapers/programathor';
import Jobs, { JobModel } from '../../infra/mongodb/models/jobs';
import ScrapedJob from '../../shared/types/scrapedJob';
import Source from '../../shared/source';

const getActiveJobsByLinks = async (links: string[]): Promise<JobModel[]> => {
    try {
        const jobs = await Jobs.find(
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

const storeJobs = async (jobs: ScrapedJob[]): Promise<void> => {
    try {
        await Jobs.insertMany(jobs);
    } catch (error) {
        throw error;
    }
};

const disableJobs = async (jobs: JobModel[]): Promise<void> => {
    try {
        if (!jobs) throw "Argument Exception: 'jobs' is not valid";

        const ids = jobs.map(x => x._id);

        await Jobs.updateMany(
            { _id: { $in: ids } },
            { $set: { isActive: false } }
        );
    } catch (error) {
        console.error(error);
    }
};

const updateJobs = async (jobs: ScrapedJob[]): Promise<void> => {
    try {
        const scrapedlinks = jobs.map(job => job.link);
        const existingJobs = await getActiveJobsByLinks(scrapedlinks);

        if (existingJobs && existingJobs.length) {
            const newjobs = jobs.filter(
                job => !existingJobs.some(dbJob => dbJob.link === job.link)
            );

            const unavailableJobs = existingJobs.filter(
                dbJob => !jobs.some(job => job.link === dbJob.link)
            );

            await Promise.all([
                storeJobs(newjobs),
                disableJobs(unavailableJobs),
            ]);
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
