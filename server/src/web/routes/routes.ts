import { Router, Response, Request, NextFunction } from 'express';

import {
    getGeekhunterData,
    getProgramathorData,
    getHipstersData,
    getStackoverflowData,
    storeTheHisptersData,
} from '../controllers/scraperController';
import { getByOriginName } from '../controllers/jobController';

const routes: Router = Router();

routes.get('/', async (req, res) => {
    const result = { health: "Ok, i'm alive" };

    res.json(result);
});

//scraper
routes.get('/scraper/hipsters', getHipstersData);

routes.patch('/scraper/hipsters', storeTheHisptersData);

routes.get('/scraper/geekhunter', getGeekhunterData);

routes.get('/scraper/stackoverflow', getStackoverflowData);

routes.get('/scraper/programathor', getProgramathorData);

//job
routes.get('/job', getByOriginName);

export default routes;
