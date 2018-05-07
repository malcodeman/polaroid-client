import { SIGNUP_SUCCESS, SIGNUP_FAILURE } from "../actions/auth_actions";

const initialState = {
  signup_success: false,
  signup_failure: false
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
    default:
      return state;
  }
};
