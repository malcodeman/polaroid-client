import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE,
  CREATE_POST_CLEAR,
  CREATE_COMMENT_SUCCESS,
  CREATE_LIKE_SUCCESS,
  DESTROY_LIKE_SUCCESS,
  CREATE_BOOKMARK_SUCCESS,
  DESTROY_BOOKMARK_SUCCESS
} from "../actions/postsActionTypes";
import { LOGOUT_SUCCESS } from "../../auth/actions/authActionTypes";

const initialState = {
  posts: [],
  loading: false,
  error: true,
  create_post_success: false,
  create_post_failure: false
};

export default (state = initialState, action) => {
  console.log(action);
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
    case LOGOUT_SUCCESS:
      return {
        ...state,
        posts: [],
        loading: true
      };
    case CREATE_POST_SUCCESS:
      return {
        ...state,
        create_post_success: true,
        posts: [action.payload, ...state.posts]
      };
    case CREATE_POST_FAILURE:
      return {
        ...state,
        create_post_failure: true
      };
    case CREATE_POST_CLEAR:
      return {
        ...state,
        create_post_success: false,
        create_post_failure: false
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
          } else {
            return post;
          }
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
              liked: {
                likeId: action.payload.id
              }
            };
          } else {
            return post;
          }
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
          } else {
            return post;
          }
        })
      };
    case CREATE_BOOKMARK_SUCCESS:
      return {
        ...state,
        posts: state.posts.map(post => {
          if (post.id === action.payload.postId) {
            return {
              ...post,
              bookmarked: {
                bookmarkId: action.payload.id
              }
            };
          } else {
            return post;
          }
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
          } else {
            return post;
          }
        })
      };
    default:
      return state;
  }
};
