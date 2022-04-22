import {
  LOGIN_AUTH_ERROR,
  LOGIN_CLEAR,
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from './actionTypes';

const initialState = {
  loginLoading: false,
  loginRes: {},
  loginSuccess: false,
};

export const loginReducer = (
  state = initialState,
  action: {type: string; loginRes: any},
) => {
  const {loginRes} = action;
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loginLoading: true,
        loginSuccess: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginLoading: false,
        loginRes,
        loginSuccess: true,
      };

    case LOGIN_FAILED:
      return {
        ...state,
        loginLoading: false,
        loginSuccess: false,
      };

    case LOGIN_AUTH_ERROR:
      return {
        ...state,
        loginLoading: false,
        loginSuccess: false,
      };
    case LOGIN_CLEAR:
      return {
        loginLoading: false,
        loginRes: {},
        loginSuccess: false,
      };
    default:
      return state;
  }
};
