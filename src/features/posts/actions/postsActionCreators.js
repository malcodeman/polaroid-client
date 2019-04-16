import {
  GET_POSTS_REQUEST,
  CREATE_POST_REQUEST,
  CREATE_POST_CLEAR,
  CREATE_COMMENT_REQUEST,
  CREATE_LIKE_REQUEST,
  DESTROY_LIKE_REQUEST,
  CREATE_BOOKMARK_REQUEST,
  DESTROY_BOOKMARK_REQUEST
} from "./postsActionTypes";

export const getPosts = () => {
  return {
    type: GET_POSTS_REQUEST
  };
};

export const createPost = (payload, meta) => {
  return {
    payload,
    meta,
    type: CREATE_POST_REQUEST
  };
};

export const createPostClear = () => {
  return {
    type: CREATE_POST_CLEAR
  };
};

export const createComment = comment => {
  return {
    type: CREATE_COMMENT_REQUEST,
    payload: comment
  };
};

export const createLike = postId => {
  return {
    type: CREATE_LIKE_REQUEST,
    payload: postId
  };
};

export const destroyLike = postId => {
  return {
    type: DESTROY_LIKE_REQUEST,
    payload: postId
  };
};

export const createBookmark = postId => {
  return {
    type: CREATE_BOOKMARK_REQUEST,
    payload: postId
  };
};

export const destroyBookmark = postId => {
  return {
    type: DESTROY_BOOKMARK_REQUEST,
    payload: postId
  };
};
