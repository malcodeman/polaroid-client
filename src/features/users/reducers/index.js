import { FIND_ME_SUCCESS, UNLOAD_ME } from "../actions";

const initialState = {
  me: null
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
    default:
      return state;
  }
};
