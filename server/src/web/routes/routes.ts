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

routes.get('/', async (req, res) => {
    const result = { health: "Ok, i'm alive" };

    res.json(result);
});

//scraper
routes.get('/scraper/hipsters', getHipestersScrapedData);
routes.post('/scraper/hipsters', createHipsters);
routes.put('/scraper/hipsters', updateHipsters);

routes.get('/scraper/geekhunter', getGeekhunterScrapedData);
routes.post('/scraper/geekhunter', createGeekHunter);
routes.put('/scraper/geekhunter', updateGeekHunter);

routes.get('/scraper/stackoverflow', getStackoverflowScrapedData);
routes.post('/scraper/stackoverflow', createStackOverflow);
routes.put('/scraper/stackoverflow', updateStackOverflow);

routes.get('/scraper/programathor', getProgramathorScrapedData);

//job
routes.get('/jobs/stackoverflow', getStackOverflowJobs);
routes.get('/jobs/geekhunter', getGeekHunterJobs);
routes.get('/jobs/hipsters', getHipstersJobs);

routes.get('/jobs/*', getJobById);

export default routes;
