import Job from '../models/job';
import JobSearchFilter from '../shared/types/JobSearchFilter';

const getBySourceId = async (sourceId: string) => {
    try {
        const jobs = await Job.find({ 'source.key': sourceId }, (err, res) => {
            if (err) console.log(`ERROR : ${err}`);
            return res;
        }).sort({ foundAt: -1 });

        return jobs;
    } catch (error) {
        console.log(error);
    }
};

const getByJobId = async (id: string) => {
    try {
        const job = await Job.findById(id, (err, res) => {
            if (err) console.log(`ERROR : ${err}`);
            return res;
        });

        return job;
    } catch (error) {
        console.log(error);
    }
};

const getActiveJobs = async (filter?: JobSearchFilter) => {
    try {
        const ORconditions: any = { $or: [] };

        if (filter?.company)
            ORconditions.$or.push({ company: new RegExp(filter.company, 'i') });
        if (filter?.title)
            ORconditions.$or.push({ title: new RegExp(filter.title, 'i') });

        const jobs = await Job.find({ isActive: true })
            .and(ORconditions.$or.length ? ORconditions : {})
            .sort({ foundAt: -1 });

        return jobs;
    } catch (error) {
        console.log(error);
    }
};

export { getBySourceId, getByJobId, getActiveJobs as getAllActiveJobs };
