import { Router } from 'express';

import scraperRoutes from './scraperRoutes';
import jobsRoutes from './jobsRoutes';
import healthCheckRoutes from './healthCheckRoutes';

const routes: Router = Router();

routes.use('/health', healthCheckRoutes);
routes.use('/scraper', scraperRoutes);
routes.use('/jobs', jobsRoutes);

export default routes;
