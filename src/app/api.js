import axios from 'axios';

const instance = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
	headers: {
        'content-type': 'application/json'
    },
	params: {},
});

instance.interceptors.request.use(
	async config => config,
	error => Promise.reject(error),
);
instance.interceptors.response.use(
	res => res,
	async err => Promise.reject(err),
);

export default instance;