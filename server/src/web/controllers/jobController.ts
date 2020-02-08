import { Response, Request, NextFunction } from 'express';

import { getBySourceId, getByJobId } from '../../services/jobService';
import Source from '../../shared/source';

const getHipstersJobs = async (req: Request, res: Response) => {
    try {
        const result = await getBySourceId(Source.hipsters.id);

        res.json(result);
    } catch (error) {
        console.log(error);
    }
};

const getGeekHunterJobs = async (req: Request, res: Response) => {
    try {
        const result = await getBySourceId(Source.geekhunter.id);

        res.json(result);
    } catch (error) {
        console.log(error);
    }
};

const getStackOverflowJobs = async (req: Request, res: Response) => {
    try {
        const result = await getBySourceId(Source.stackOverflow.id);

        res.json(result);
    } catch (error) {
        console.log(error);
    }
};

const getJobById = async (req: Request, res: Response) => {
    try {
        const jobId = req.params[0];

        const result = await getByJobId(jobId);

        res.json(result);
    } catch (error) {
        console.log(error);
    }
};

export { getGeekHunterJobs, getHipstersJobs, getStackOverflowJobs, getJobById };
