import axios from 'axios';

const api = axios.create({baseURL: process.env.BACKEND_URL + '/api'})

api.defaults.headers.post['Content-Type'] = 'application/json';

export default api;