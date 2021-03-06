import Jobs from '../../infra/mongodb/models/jobs';
import JobSearchFilter from '../../shared/types/JobSearchFilter';

const getBySourceId = async (sourceId: string) => {
    try {
        const jobs = await Jobs.find({ 'source.key': sourceId }, (err, res) => {
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
        const job = await Jobs.findById(id, (err, res) => {
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

        const query = Jobs.find({ isActive: true })
            .and(ORconditions.$or.length ? ORconditions : {})
            .sort({ foundAt: -1 })
            .skip(filter.skip ?? 0);

        if (filter.take) query.limit(filter.take);

        const jobs = await query;

        return jobs;
    } catch (error) {
        console.log(error);
    }
};

export default { getBySourceId, getByJobId, getActiveJobs };
