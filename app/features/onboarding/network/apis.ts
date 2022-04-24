import axios from 'axios';
import {LoginModel} from '../interfaces';
import {loginEndpoint} from './endpoints';

export const loginApi = (payload: LoginModel) => {
  return axios.post(loginEndpoint, payload);
};
