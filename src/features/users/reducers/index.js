import {
  FIND_ME_REQUEST,
  FIND_ME_SUCCESS,
  FIND_ME_FAILURE,
  UNLOAD_ME,
  FIND_USER_BY_USERNAME_REQUEST,
  FIND_USER_BY_USERNAME_SUCCESS,
  FIND_USER_BY_USERNAME_FAILURE,
  UNLOAD_USER,
  UPDATE_ME_SUCCESS
} from "../actions";

import {
  CREATE_POST_SUCCESS,
  CREATE_BOOKMARK_SUCCESS
} from "../../posts/actions/posts_actions";

const initialState = {
  me: null,
  user: null,
  loading: false,
  error: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FIND_ME_REQUEST:
      return {
        ...state,
        loading: true,
        error: false
      };
    case FIND_ME_SUCCESS:
      return {
        ...state,
        me: action.payload,
        loading: false,
        error: false
      };
    case FIND_ME_FAILURE:
      return {
        ...state,
        me: null,
        loading: false,
        error: true
      };
    case UPDATE_ME_SUCCESS:
      return {
        ...state,
        me: {
          ...state.me,
          profilePhotoURL: action.payload.profilePhotoURL
        },
        loading: false,
        error: false
      };
    case UNLOAD_ME:
      return {
        ...state,
        me: null,
        loading: false,
        error: false
      };
    case FIND_USER_BY_USERNAME_REQUEST:
      return {
        ...state,
        loading: true,
        error: false
      };
    case FIND_USER_BY_USERNAME_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: false
      };
    case FIND_USER_BY_USERNAME_FAILURE:
      return {
        ...state,
        user: null,
        loading: false,
        error: true
      };
    case UNLOAD_USER:
      return {
        ...state,
        user: null,
        loading: false,
        error: false
      };
    case CREATE_POST_SUCCESS:
      return {
        ...state,
        me: {
          ...state.me,
          posts: [action.payload, ...state.me.posts]
        }
      };
    case CREATE_BOOKMARK_SUCCESS:
      return {
        ...state,
        me: {
          ...state.me,
          bookmarks: [action.payload, ...state.me.bookmarks]
        }
      };
    default:
      return state;
  }
};
