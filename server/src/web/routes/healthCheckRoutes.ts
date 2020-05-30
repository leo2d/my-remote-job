import { Router } from 'express';

import healthCheckController from '../controllers/healthCheckController';

const healthCheckRoutes: Router = Router();

healthCheckRoutes.get('/', healthCheckController.check);

export default healthCheckRoutes;
