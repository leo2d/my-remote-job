import { Response, Request } from 'express';

import jobService from '../../services/jobService';
import JobSearchFilter from '../../shared/types/JobSearchFilter';

const getJobById = async (req: Request, res: Response) => {
    try {
        const result = await jobService.getByJobId(req.params.id);

        res.json(result);
    } catch (error) {
        console.log(error);
    }
};

const getJobsByFilter = async (req: Request, res: Response) => {
    try {
        const filter = parseQueryToJobFilter(req);

        const result = await jobService.getActiveJobs(filter);

        res.json(result);
    } catch (error) {
        console.log(error);
    }
};

const parseQueryToJobFilter = (req: Request): JobSearchFilter => {
    const { skip, take, company, title } = req.query;

    return {
        title: title as string,
        company: company as string,
        skip: skip ? parseInt(`${skip}`) : 0,
        take: take ? parseInt(`${take}`) : undefined,
    };
};

export default { getJobById, getJobsByFilter };
