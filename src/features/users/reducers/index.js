import { FIND_ME_SUCCESS } from "../actions";

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
    default:
      return state;
  }
};
