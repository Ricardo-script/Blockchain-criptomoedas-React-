import axios from 'axios';

const api = axios.create({
    baseURL:'https://clients-control-api.herokuapp.com/clients-control-api'
});

export default api;