import axios from 'axios';
import config from '../config';

const Api = axios.create({
    baseURL: `${config.baseServerURl}/api`,
});

export default Api;
