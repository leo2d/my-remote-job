import { Router, Response, Request, NextFunction } from 'express';

import {
    getGeekHunterJobs,
    getHipstersJobs,
    getStackOverflowJobs,
    getJobById,
    getAllJobs,
    getJobsByFilter,
} from '../controllers/jobController';
import validateFilter from '../middlewares/validateFilter';

const routes: Router = Router();

// routes.get('/', getAllJobs);
routes.get('/stackoverflow', getStackOverflowJobs);
routes.get('/geekhunter', getGeekHunterJobs);
routes.get('/hipsters', getHipstersJobs);

routes.get('/:id', getJobById);
routes.get('/', validateFilter, getJobsByFilter);

export { routes as jobsRoutes };
