import Job from '../models/job';

const getByOrigin = async (origin: string) => {
    try {
        const jobs = await Job.find((err, resp) => {
            resp.find(x => x.origin === origin);
        });

        return jobs;
    } catch (error) {
        console.log(error);
    }
};

export { getByOrigin };
