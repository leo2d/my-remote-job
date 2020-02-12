import Job from '../models/job';

const getBySourceId = async (sourceId: string) => {
    try {
        const jobs = await Job.find({ sourceId }, (err, res) => {
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

const getAllActiveJobs = async () => {
    try {
        const jobs = await Job.find({ isActive: true }, (err, res) => {
            if (err) console.log(`ERROR : ${err}`);
            return res;
        }).sort({ foundAt: -1 });

        return jobs;
    } catch (error) {
        console.log(error);
    }
};

export { getBySourceId, getByJobId, getAllActiveJobs };
