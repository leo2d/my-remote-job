import { Router, Response, Request, NextFunction } from 'express';

import {
    getGeekHunterJobs,
    getHipstersJobs,
    getStackOverflowJobs,
    getJobById,
} from '../controllers/jobController';

const routes: Router = Router();

routes.get('/stackoverflow', getStackOverflowJobs);
routes.get('/geekhunter', getGeekHunterJobs);
routes.get('/hipsters', getHipstersJobs);

routes.get('/:id', getJobById);

export { routes as jobsRoutes };
