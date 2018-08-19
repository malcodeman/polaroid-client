import {
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_RESET,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_RESET
} from "../actions/authActionTypes";

const initialState = {
  user: {},
  signup_success: false,
  signup_failure: false,
  login_success: false,
  login_failure: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        signup_success: true
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        signup_failure: true
      };
    case SIGNUP_RESET:
      return {
        ...state,
        signup_success: false,
        signup_failure: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        login_success: true
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        login_failure: true
      };
    case LOGIN_RESET:
      return {
        ...state,
        login_success: false,
        login_failure: false
      };
    default:
      return state;
  }
};
