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
import {
    getGeekHunterJobs,
    getHipstersJobs,
    getStackOverflowJobs,
    getJobById,
} from '../controllers/jobController';

const routes: Router = Router();

routes.get('/api/', async (req, res) => {
    const result = { health: "Ok, i'm alive" };

    res.json(result);
});

//scraper
routes.get('/api/scraper/hipsters', getHipestersScrapedData);
routes.post('/api/scraper/hipsters', createHipsters);
routes.put('/api/scraper/hipsters', updateHipsters);

routes.get('/api/scraper/geekhunter', getGeekhunterScrapedData);
routes.post('/api/scraper/geekhunter', createGeekHunter);
routes.put('/api/scraper/geekhunter', updateGeekHunter);

routes.get('/api/scraper/stackoverflow', getStackoverflowScrapedData);
routes.post('/api/scraper/stackoverflow', createStackOverflow);
routes.put('/api/scraper/stackoverflow', updateStackOverflow);

routes.get('/api/scraper/programathor', getProgramathorScrapedData);

//job
routes.get('/api/jobs/stackoverflow', getStackOverflowJobs);
routes.get('/api/jobs/geekhunter', getGeekHunterJobs);
routes.get('/api/jobs/hipsters', getHipstersJobs);

routes.get('/api/jobs/*', getJobById);

export default routes;
