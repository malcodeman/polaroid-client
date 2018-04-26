import { GET_POSTS_REQUEST, GET_POSTS_SUCCESS } from "../actions/posts_actions";

const initialState = {
  posts: []
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
        posts: action.payload
      };
    default:
      return state;
  }
};
