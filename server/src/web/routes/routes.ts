import { Router, Response, Request, NextFunction } from 'express';

import {
    getGeekhunterData,
    getProgramathorData,
    getHipstersData,
    getStackoverflowData,
} from '../controllers/scraperController';

const routes: Router = Router();

routes.get('/', async (req, res) => {
    const result = { health: "Ok, i'm alive" };

    res.json(result);
});

routes.get('/scraper/hipsters', getHipstersData);

routes.get('/scraper/geekhunter', getGeekhunterData);

routes.get('/scraper/stackoverflow', getStackoverflowData);

routes.get('/scraper/programathor', getProgramathorData);

export default routes;
