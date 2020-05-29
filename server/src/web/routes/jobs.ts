import { Router } from 'express';

import jobController from '../controllers/jobController';
import validateFilter from '../middlewares/validateFilter';

const routes: Router = Router();

routes.get('/:id', jobController.getJobById);
routes.get('/', validateFilter, jobController.getJobsByFilter);

export { routes as jobsRoutes };
