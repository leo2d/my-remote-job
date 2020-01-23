import { Router } from 'express';
import { scrapHipstersData } from '../services/hipsters';

const routes = new Router();

routes.get('/', async (req, res) => {
  const result = await scrapHipstersData();

  res.json(result);
});

export default routes;
