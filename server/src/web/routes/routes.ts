import { Router, Response, Request, NextFunction } from 'express';

import {
    getGeekhunterData,
    getProgramathorData,
    getHipstersData,
    getStackoverflowData,
    storeTheHisptersData,
    storeTheStackOverflowData,
    storeTheGeekHunterData,
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
routes.get('/scraper/hipsters', getHipstersData);

routes.patch('/scraper/hipsters', storeTheHisptersData);

routes.get('/scraper/geekhunter', getGeekhunterData);
routes.patch('/scraper/geekhunter', storeTheGeekHunterData);

routes.get('/scraper/stackoverflow', getStackoverflowData);
routes.patch('/scraper/stackoverflow', storeTheStackOverflowData);

routes.get('/scraper/programathor', getProgramathorData);

//job
routes.get('/jobs/stackoverflow', getStackOverflowJobs);
routes.get('/jobs/geekhunter', getGeekHunterJobs);
routes.get('/jobs/hipsters', getHipstersJobs);

routes.get('/jobs/*', getJobById);

export default routes;
