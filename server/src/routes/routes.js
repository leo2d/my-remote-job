import { Router } from 'express';
import { scrapHipsters } from '../services/hipsters';
import { scrapStackoverflow } from '../services/stackOverflow';

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

export default routes;
