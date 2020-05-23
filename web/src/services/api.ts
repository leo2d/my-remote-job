import axios from 'axios';
import serverURL from '../serverURL';

const Api = axios.create({
    baseURL: `${serverURL}/api`,
});

export default Api;
