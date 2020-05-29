import { Router } from 'express';

import { scraperRoutes } from './scraper';
import { jobsRoutes } from './jobs';

const routes: Router = Router();

routes.use('/scraper', scraperRoutes);
routes.use('/jobs', jobsRoutes);

export default routes;
