import { Router } from 'express';
import { scrapHipsters } from '../services/hipsters';
import { scrapStackoverflow } from '../services/stackOverflow';
import { scrapGeekhunterData } from '../services/geekhunter';

const routes = new Router();

routes.get('/', async (req, res) => {
  const result = await scrapHipsters();

  res.json(result);
});

routes.get('/hipsters', async (req, res) => {
  const result = await scrapHipsters();

  res.json(result);
});

routes.get('/stack', async (req, res) => {
  const result = await scrapStackoverflow();

  res.json(result);
});

routes.get('/geekhunter', async (req, res) => {
  const result = await scrapGeekhunterData();

  res.json(result);
});

export default routes;
