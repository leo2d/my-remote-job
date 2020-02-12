import { Router } from 'express';

import { scraperRoutes } from './scraper';
import { jobsRoutes } from './jobs';

const routes: Router = Router();

routes.get('/api/', async (req, res) => {
    const result = { health: "Ok, i'm alive" };

    res.json(result);
});

routes.use('/api/scraper', scraperRoutes);
routes.use('/api/jobs', jobsRoutes);

export default routes;
