import { Router, Response, Request, NextFunction } from 'express';

import {
    getGeekhunterScrapedData,
    getHipestersScrapedData,
    getStackoverflowScrapedData,
    getProgramathorScrapedData,
    createGeekHunter,
    createHipsters,
    createStackOverflow,
    updateGeekHunter,
    updateHipsters,
    updateStackOverflow,
} from '../controllers/scraperController';

const routes: Router = Router();

routes.get('/hipsters', getHipestersScrapedData);
routes.post('/hipsters', createHipsters);
routes.put('/hipsters', updateHipsters);

routes.get('/geekhunter', getGeekhunterScrapedData);
routes.post('/geekhunter', createGeekHunter);
routes.put('/geekhunter', updateGeekHunter);

routes.get('/stackoverflow', getStackoverflowScrapedData);
routes.post('/stackoverflow', createStackOverflow);
routes.put('/stackoverflow', updateStackOverflow);

routes.get('/programathor', getProgramathorScrapedData);

export { routes as scraperRoutes };
