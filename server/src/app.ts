import express from 'express';
import routes from './web/routes';
import cors from 'cors';

import { SERVER_PORT } from './config/config';
import mongoConnection from './infra/mongodb/mongoConnection';

const start = async () => {
    const app = express();
    app.use(express.json());

    app.use(cors());

    app.use('/api', routes);

    await mongoConnection.connect();

    app.listen(SERVER_PORT, () =>
        console.log(`Scraper listening on port ${SERVER_PORT}!`)
    );
};

start();
