import {
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from "../actions/auth_actions";

const initialState = {
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
        signup_success: true
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        signup_failure: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        login_success: true
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        login_failure: true
      };
    default:
      return state;
  }
};
