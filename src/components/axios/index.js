import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.headers = {
    "Access-Control-Allow-Origin": "Authorization,Origin, X-Requested-With, Content-Type, Accept"
}
axios.defaults.timeout = 1000;

export default axios;



