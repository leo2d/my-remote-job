import express from 'express';
import routes from './web/routes';

import swaggerUi from 'swagger-ui-express';
import * as swaggerDoc from './swaggerDoc.json';

const port = 3333;

const app = express();

app.use(express.json());
app.use(routes);

app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.listen(port, () => console.log(`Scraper listening on port ${port}!`));
