import { GET_POSTS_REQUEST, GET_POSTS_SUCCESS } from "../actions/posts_actions";
import { LOGOUT_SUCCESS } from "../../auth/actions/auth_actions";

const initialState = {
  posts: [],
  loading: true
};

export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case GET_POSTS_REQUEST:
      return {
        ...state
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        loading: false
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        posts: [],
        loading: true
      };
    default:
      return state;
  }
};
