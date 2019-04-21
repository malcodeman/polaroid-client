import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE,
  CREATE_COMMENT_SUCCESS,
  CREATE_LIKE_SUCCESS,
  DESTROY_LIKE_SUCCESS,
  CREATE_BOOKMARK_SUCCESS,
  DESTROY_BOOKMARK_SUCCESS
} from "../actions/postsActionTypes";
import { LOGOUT } from "../../auth/actions/authActionTypes";

const initialState = {
  posts: [],
  loading: false,
  error: false
};

export default (state = initialState, action) => {
  console.log(
    `%c${action.type}`,
    "background: #000; color: #22edfc; padding: 4px"
  );
  switch (action.type) {
    case GET_POSTS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
        error: false
      };
    case GET_POSTS_FAILURE:
      return {
        ...state,
        error: true,
        loading: false
      };
    case LOGOUT:
      return {
        ...state,
        posts: [],
        loading: false,
        error: false
      };
    case CREATE_POST_SUCCESS:
      return {
        ...state,
        posts: [action.payload, ...state.posts]
      };
    case CREATE_POST_FAILURE:
      return {
        ...state,
        error: true
      };
    case CREATE_COMMENT_SUCCESS:
      return {
        ...state,
        posts: state.posts.map(post => {
          if (post.id === action.payload.postId) {
            return {
              ...post,
              comments: [...post.comments, action.payload]
            };
          }
          return post;
        })
      };
    case CREATE_LIKE_SUCCESS:
      return {
        ...state,
        posts: state.posts.map(post => {
          if (post.id === action.payload.postId) {
            return {
              ...post,
              likesCount: post.likesCount + 1,
              liked: true
            };
          }
          return post;
        })
      };
    case DESTROY_LIKE_SUCCESS:
      return {
        ...state,
        posts: state.posts.map(post => {
          if (post.id === action.payload.postId) {
            return {
              ...post,
              likesCount: post.likesCount - 1,
              liked: false
            };
          }
          return post;
        })
      };
    case CREATE_BOOKMARK_SUCCESS:
      return {
        ...state,
        posts: state.posts.map(post => {
          if (post.id === action.payload.postId) {
            return {
              ...post,
              bookmarked: true
            };
          }
          return post;
        })
      };
    case DESTROY_BOOKMARK_SUCCESS:
      return {
        ...state,
        posts: state.posts.map(post => {
          if (post.id === action.payload.postId) {
            return {
              ...post,
              bookmarked: false
            };
          }
          return post;
        })
      };
    default:
      return state;
  }
};
