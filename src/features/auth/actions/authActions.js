import {
  LOGIN_REQUEST,
  SIGNUP_REQUEST,
  SIGNUP_RESET,
  LOGIN_RESET,
  LOGOUT_REQUEST
} from "./authActionTypes";

export const login = (payload, meta) => {
  return {
    payload,
    meta,
    type: LOGIN_REQUEST
  };
};

export const signup = (payload, meta) => {
  return {
    payload,
    meta,
    type: SIGNUP_REQUEST
  };
};

export const signupReset = () => {
  return {
    type: SIGNUP_RESET
  };
};

export const loginReset = () => {
  return {
    type: LOGIN_RESET
  };
};

export const logout = user => {
  return {
    type: LOGOUT_REQUEST,
    payload: user
  };
};
