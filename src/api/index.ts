import axios from 'axios';

let timeZone: string | undefined;
try {
  timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
} catch (error) {
  console.error(error);
}

const responseOnFulfilled = (response) => response.data;
const responseOnError = (error) => {
  if (error?.response?.status) {
    return;
  }

  return Promise.reject(error);
};

const createAPI = (baseURL) => {
  const instance = axios.create({
    baseURL,
    headers: {
      'X-Device-Type': 'WEB',
      'X-Device-Token': null,
      'Time-Zone': timeZone,
    },
    timeout: 30000,
  });

  instance.interceptors.response.use(responseOnFulfilled, responseOnError);

  return instance;
};

export const insideAPI = createAPI(`${process.env.PUBLIC_URL}/static`);
