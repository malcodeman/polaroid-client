import {
  FIND_ME_REQUEST,
  FIND_ME_SUCCESS,
  FIND_ME_FAILURE,
  FIND_USER_BY_USERNAME_REQUEST,
  FIND_USER_BY_USERNAME_SUCCESS,
  FIND_USER_BY_USERNAME_FAILURE
} from "../actions/usersActionTypes";

import {
  CREATE_POST_SUCCESS,
  CREATE_BOOKMARK_SUCCESS,
  DESTROY_BOOKMARK_SUCCESS
} from "../../posts/actions/postsActionTypes";

import {
  UPDATE_NAME_SUCCESS,
  UPDATE_EMAIL_SUCCESS,
  UPDATE_PROFILE_PHOTO_URL_SUCCESS
} from "../../settings/actions/settingsActionTypes";
import { LOGIN_SUCCESS, LOGOUT } from "../../auth/actions/authActionTypes";

const userInitialState = {
  profilePhotoURL: null,
  nameFirstLetter: "",
  username: "",
  name: "",
  email: "",
  posts: []
};

const meInitialState = {
  email: "",
  name: "",
  username: "",
  nameFirstLetter: "",
  profilePhotoURL: null,
  createdAt: null,
  posts: [],
  bookmarks: []
};

const initialState = {
  me: meInitialState,
  user: userInitialState,
  loading: false,
  error: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NAME_SUCCESS:
      return {
        ...state,
        me: {
          ...state.me,
          name: action.payload.name,
          nameFirstLetter: action.payload.nameFirstLetter
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
    case UPDATE_PROFILE_PHOTO_URL_SUCCESS:
      return {
        ...state,
        me: {
          ...state.me,
          profilePhotoURL: action.payload.profilePhotoURL
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
    case FIND_USER_BY_USERNAME_REQUEST:
      return {
        ...state,
        user: userInitialState,
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
        user: userInitialState,
        loading: false,
        error: true
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
    case LOGIN_SUCCESS:
      return {
        ...state,
        me: action.payload
      };
    case LOGOUT:
      return {
        ...state,
        me: meInitialState
      };
    default:
      return state;
  }
};
