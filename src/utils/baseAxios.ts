import axios from 'axios';

import { config } from './config/config';

export const axiosInstance = axios.create({
  baseURL: `${config.REACT_APP_SERVER_URL}`,
});
