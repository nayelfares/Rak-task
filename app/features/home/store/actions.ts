import {LOGIN_CLEAR, LOGIN_REQUEST} from './actionTypes';

export const loginAction = (payload: any) => {
  return {
    type: LOGIN_REQUEST,
    payload,
  };
};

export const loginClear = () => {
  return {
    type: LOGIN_CLEAR,
  };
};
