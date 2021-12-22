import axios from 'axios';

const API = axios.create({
    baseURL: 'https://yts.mx/api/v2/',
    timeout: 16000,
    headers: {
        Accept: '*/*',
        'Content-Type': 'application/json',
    },
});



const handleRequest = async req => {
    return req;
};

const handleError = error => {
    /*global Promise */
    /*eslint no-undef: "error"*/
    let parsed_error = Object.assign({}, error);
    return Promise.reject(parsed_error?.response?.data);
};

const handleResponse = response => {
    return Promise.resolve(response.data);
};

API.interceptors.request.use(handleRequest);
API.interceptors.response.use(handleResponse, handleError);

export default API;