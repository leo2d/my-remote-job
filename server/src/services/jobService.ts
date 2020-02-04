import Job from '../models/job';

const getByOrigin = async (origin: string) => {
    try {
        const jobs = await Job.find({ origin }, (err, res) => {
            if (err) console.log(`ERROR : ${err}`);
            return res;
        });

        return jobs;
    } catch (error) {
        console.log(error);
    }
};

export { getByOrigin };
