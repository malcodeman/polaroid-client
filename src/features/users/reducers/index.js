import {
  FIND_ME_REQUEST,
  FIND_ME_SUCCESS,
  FIND_ME_FAILURE,
  UNLOAD_ME,
  FIND_USER_BY_USERNAME_REQUEST,
  FIND_USER_BY_USERNAME_SUCCESS,
  FIND_USER_BY_USERNAME_FAILURE,
  UNLOAD_USER,
  UPDATE_ME_SUCCESS,
  CHANGE_THEME
} from "../actions";

import {
  CREATE_POST_SUCCESS,
  CREATE_BOOKMARK_SUCCESS,
  DESTROY_BOOKMARK_SUCCESS
} from "../../posts/actions/posts_actions";

import {
  UPDATE_NAME_SUCCESS,
  UPDATE_USERNAME_SUCCESS,
  UPDATE_EMAIL_SUCCESS
} from "../../settings/actions/settingsActionTypes";

const initialState = {
  me: { username: "" },
  user: null,
  loading: false,
  error: false,
  theme: "dark"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NAME_SUCCESS:
      return {
        ...state,
        me: {
          ...state.me,
          name: action.payload.name
        }
      };
    case UPDATE_USERNAME_SUCCESS:
      return {
        ...state,
        me: {
          ...state.me,
          username: action.payload.username
        }
      };
    case UPDATE_EMAIL_SUCCESS:
      return {
        ...state,
        me: {
          ...state.me,
          email: action.payload.email
        }
      };
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
        loading: false,
        error: true
      };
    case UPDATE_ME_SUCCESS:
      return {
        ...state,
        me: {
          ...state.me,
          email: action.payload.email,
          username: action.payload.username,
          name: action.payload.name,
          profilePhotoURL: action.payload.profilePhotoURL
        },
        loading: false,
        error: false
      };
    case UNLOAD_ME:
      return {
        ...state,
        me: { username: "" },
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
    case DESTROY_BOOKMARK_SUCCESS:
      return {
        ...state,
        me: {
          ...state.me,
          bookmarks: state.me.bookmarks.filter(bookmark => {
            if (bookmark.id === action.payload.id) {
              return null;
            }
            return bookmark;
          })
        }
      };
    case CHANGE_THEME:
      return {
        ...state,
        theme: action.payload
      };
    default:
      return state;
  }
};
