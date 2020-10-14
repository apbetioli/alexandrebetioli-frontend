import axios from 'axios';

const api = axios.create({baseURL: process.env.REACT_APP_API_URL + '/api'})

api.defaults.headers.post['Content-Type'] = 'application/json';

export default api;