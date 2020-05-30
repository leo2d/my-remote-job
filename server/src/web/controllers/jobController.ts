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
        const filter = req.query as JobSearchFilter;

        const result = await jobService.getActiveJobs(filter);

        res.json(result);
    } catch (error) {
        console.log(error);
    }
};

export default { getJobById, getJobsByFilter };
