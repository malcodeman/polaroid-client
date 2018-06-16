import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE,
  CREATE_POST_CLEAR,
  CREATE_POST_TRIGGER,
  CREATE_COMMENT_SUCCESS,
  CREATE_LIKE_SUCCESS,
  DESTROY_LIKE_SUCCESS,
  CREATE_BOOKMARK_SUCCESS,
  DESTROY_BOOKMARK_SUCCESS
} from "../actions/posts_actions";
import { LOGOUT_SUCCESS } from "../../auth/actions/auth_actions";

const initialState = {
  posts: null,
  loading: true,
  create_post_success: false,
  create_post_failure: false,
  create_post_trigger: false
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
    case CREATE_POST_TRIGGER:
      return {
        ...state,
        create_post_trigger: true
      };
    case CREATE_POST_SUCCESS:
      return {
        ...state,
        create_post_success: true,
        create_post_trigger: false
      };
    case CREATE_POST_FAILURE:
      return {
        ...state,
        create_post_failure: true,
        create_post_trigger: false
      };
    case CREATE_POST_CLEAR:
      return {
        ...state,
        create_post_success: false,
        create_post_failure: false,
        create_post_trigger: false
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
