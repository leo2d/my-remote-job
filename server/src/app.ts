import express from 'express';
import routes from './web/routes';
import cors from 'cors';

import swaggerUi from 'swagger-ui-express';
import * as swaggerDoc from './swaggerDoc.json';

const port = 3333;

const app = express();

app.use(express.json());

var allowedOrigins = ['http://localhost:3000', ''];
app.use(
    cors({
        origin: function(origin, callback) {
            if (!origin) return callback(null, true);
            if (allowedOrigins.indexOf(origin) === -1) {
                return callback(new Error('Not allowed by CORS'), false);
            }
            return callback(null, true);
        },
    })
);

app.use(routes);

app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.listen(port, () => console.log(`Scraper listening on port ${port}!`));
