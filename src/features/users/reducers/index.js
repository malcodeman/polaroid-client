import {
  FIND_ME_SUCCESS,
  UNLOAD_ME,
  FIND_USER_BY_USERNAME_SUCCESS
} from "../actions";

const initialState = {
  me: null,
  user: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FIND_ME_SUCCESS:
      return {
        ...state,
        me: action.payload
      };
    case UNLOAD_ME:
      return {
        ...state,
        me: null
      };
    case FIND_USER_BY_USERNAME_SUCCESS:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};
