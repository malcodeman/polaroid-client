export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const saveUser = newUser => {
  return {
    type: SIGNUP_REQUEST,
    payload: newUser
  };
};

export const login = user => {
  return {
    type: LOGIN_REQUEST,
    payload: user
  };
};
