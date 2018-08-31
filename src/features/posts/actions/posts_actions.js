export const GET_POSTS_REQUEST = "GET_POSTS_REQUEST";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POSTS_FAILURE = "GET_POSTS_FAILURE";

export const CREATE_POST_REQUEST = "CREATE_POST_REQUEST";
export const CREATE_POST_SUCCESS = "CREATE_POST_SUCCESS";
export const CREATE_POST_FAILURE = "CREATE_POST_FAILURE";
export const CREATE_POST_CLEAR = "CREATE_POST_CLEAR";

export const CREATE_COMMENT_REQUEST = "CREATE_COMMENT_REQUEST";
export const CREATE_COMMENT_SUCCESS = "CREATE_COMMENT_SUCCESS";
export const CREATE_COMMENT_FAILURE = "CREATE_COMMENT_FAILURE";

export const CREATE_LIKE_REQUEST = "CREATE_LIKE_REQUEST";
export const CREATE_LIKE_SUCCESS = "CREATE_LIKE_SUCCESS";
export const CREATE_LIKE_FAILURE = "CREATE_LIKE_FAILURE";

export const DESTROY_LIKE_REQUEST = "DESTROY_LIKE_REQUEST";
export const DESTROY_LIKE_SUCCESS = "DESTROY_LIKE_SUCCESS";
export const DESTROY_LIKE_FAILURE = "DESTROY_LIKE_FAILURE";

export const CREATE_BOOKMARK_REQUEST = "CREATE_BOOKMARK_REQUEST";
export const CREATE_BOOKMARK_SUCCESS = "CREATE_BOOKMARK_SUCCESS";
export const CREATE_BOOKMARK_FAILURE = "CREATE_BOOKMARK_FAILURE";

export const DESTROY_BOOKMARK_REQUEST = "DESTROY_BOOKMARK_REQUEST";
export const DESTROY_BOOKMARK_SUCCESS = "DESTROY_BOOKMARK_SUCCESS";
export const DESTROY_BOOKMARK_FAILURE = "DESTROY_BOOKMARK_FAILURE";

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
    payload: {
      postId
    }
  };
};

export const destroyLike = id => {
  return {
    type: DESTROY_LIKE_REQUEST,
    payload: id
  };
};

export const createBookmark = postId => {
  return {
    type: CREATE_BOOKMARK_REQUEST,
    payload: {
      postId
    }
  };
};

export const destroyBookmark = id => {
  return {
    type: DESTROY_BOOKMARK_REQUEST,
    payload: id
  };
};
