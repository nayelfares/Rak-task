import axios from 'axios';
import {loginEndpoint} from './endpoints';

export const loginApi = (payload: any) => {
  return axios.post(loginEndpoint, payload);
};
