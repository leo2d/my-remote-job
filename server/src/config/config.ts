import * as dotenv from 'dotenv';

if (process.env.NODE_ENV && process.env.NODE_ENV !== 'production') {
    const path = process.env.NODE_ENV.includes('test')
        ? `${__dirname}/.env.test`
        : `${__dirname}/.env.dev`;

    dotenv.config({ path });
}

//variables
export const MONGO_URI = process.env.MONGO_URI;

export const SERVER_PORT = parseInt(process.env.PORT || '3333', 10);
