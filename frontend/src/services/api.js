import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistackmath.herokuapp.com/'
});

export default api;