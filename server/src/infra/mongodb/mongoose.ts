import mongoose from 'mongoose';
import { MONGO_URI } from '../../config/config';

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', () => {
    console.log('> error occurred from the database');
});
db.once('open', () => {
    console.log('> successfully opened the database');
});

export default mongoose;
