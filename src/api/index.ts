import axios from 'axios';

const api = axios.create();

api.interceptors.request.use(
  config => {
    config.headers['Content-Type'] = 'application/json';
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

api.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error?.response.status === 500) {
      console.log('Server Error')
    }

    return Promise.reject(error);
  }
);
export async function get<T = any>(url: string, config = {}): Promise<T> {
  return api
    .get<T>(url, { ...config })
    .then(response => response.data);
}

export { api };
