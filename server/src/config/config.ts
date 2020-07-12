import * as dotenv from 'dotenv';

const getPath = () => {
    switch (process.env.NODE_ENV) {
        case 'stage':
            return `${__dirname}/env.stage`;
        case 'production':
            return `${__dirname}/.env.prod`;
        case 'test':
            return `${__dirname}/.env.test`;
        default:
            return `${__dirname}/.env.dev`;
    }
};

dotenv.config();

const path = getPath();

dotenv.config({ path: path });

//variables
export const MONGO_URI = process.env.MONGO_URI;

export const SERVER_PORT = parseInt(process.env.PORT || '3333', 10);
