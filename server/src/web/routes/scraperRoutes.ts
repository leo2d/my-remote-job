import { Router } from 'express';

import scraperController from '../controllers/scraperController';

const scraperRoutes: Router = Router();

scraperRoutes.post('/:sourceId', scraperController.createJobs);
scraperRoutes.put('/:sourceId', scraperController.updateJobs);
scraperRoutes.get('/:sourceId', scraperController.scrapJobs);

export default scraperRoutes;
