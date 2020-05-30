import express from 'express';
import routes from './web/routes';
import cors from 'cors';

import swaggerUi from 'swagger-ui-express';
import * as swaggerDoc from './swaggerDoc.json';

const port = 3333;

const app = express();
app.use(express.json());

var whitelist = ['http://localhost:3000', 'http://127.0.0.1:3000'];
var corsOptions = {
    origin: function(origin: any, callback: any) {
        if (whitelist.indexOf(origin) !== -1) callback(null, true);
        else callback(new Error('Not allowed by CORS'));
    },
};

app.use(cors(corsOptions));
app.use('/api', routes);

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.listen(port, () => console.log(`Scraper listening on port ${port}!`));
