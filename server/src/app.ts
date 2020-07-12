import express from 'express';
import routes from './web/routes';
import cors from 'cors';

import mongoConnection from './infra/mongodb/mongoConnection';

const createApp = async () => {
    const app = express();
    app.use(express.json());

    app.use(cors());

    app.use('/api', routes);

    await mongoConnection.connect();

    return app;
};

export default createApp;
