import { Router } from 'express';

import jobController from '../controllers/jobController';
import validateFilter from '../middlewares/validateFilter';

const jobsRoutes: Router = Router();

jobsRoutes.get('/:id', jobController.getJobById);
jobsRoutes.get('/', validateFilter, jobController.getJobsByFilter);

export default jobsRoutes;
