import mongoose from 'mongoose';
import { MONGO_URI } from '../../config/config';

const setupEvents = (): void => {
    mongoose.connection
        .once('open', () => {
            console.log('> successfully connected to the database');
        })
        .on('error', (err: any) => {
            console.log('> error occurred from the database');
        });
};

const connect = async (): Promise<void> => {
    try {
        setupEvents();

        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
            ignoreUndefined: true,
        });
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export default { connect };
