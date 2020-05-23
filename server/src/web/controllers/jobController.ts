import { Response, Request, NextFunction } from 'express';

import {
    getBySourceId,
    getByJobId,
    getAllActiveJobs,
} from '../../services/jobService';
import Source from '../../shared/source';
import JobSearchFilter from '../../shared/types/JobSearchFilter';

const getHipstersJobs = async (req: Request, res: Response) => {
    try {
        const result = await getBySourceId(Source.hipsters.key);

        res.json(result);
    } catch (error) {
        console.log(error);
    }
};

const getGeekHunterJobs = async (req: Request, res: Response) => {
    try {
        const result = await getBySourceId(Source.geekhunter.key);

        res.json(result);
    } catch (error) {
        console.log(error);
    }
};

const getStackOverflowJobs = async (req: Request, res: Response) => {
    try {
        const result = await getBySourceId(Source.stackOverflow.key);

        res.json(result);
    } catch (error) {
        console.log(error);
    }
};

const getJobById = async (req: Request, res: Response) => {
    try {
        const jobId = req.params.id;

        const result = await getByJobId(jobId);

        res.json(result);
    } catch (error) {
        console.log(error);
    }
};

const getAllJobs = async (req: Request, res: Response) => {
    try {
        const result = await getAllActiveJobs();

        res.json(result);
    } catch (error) {
        console.log(error);
    }
};

const getJobsByFilter = async (req: Request, res: Response) => {
    try {
        const filter = req.query as JobSearchFilter;

        const result = await getAllActiveJobs(filter);

        res.json(result);
    } catch (error) {
        console.log(error);
    }
};

export {
    getGeekHunterJobs,
    getHipstersJobs,
    getStackOverflowJobs,
    getJobById,
    getAllJobs,
    getJobsByFilter,
};
