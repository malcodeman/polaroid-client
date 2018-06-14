export const GET_POSTS_REQUEST = "GET_POSTS_REQUEST";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POSTS_FAILURE = "GET_POSTS_FAILURE";

export const CREATE_POST_REQUEST = "CREATE_POST_REQUEST";
export const CREATE_POST_SUCCESS = "CREATE_POST_SUCCESS";
export const CREATE_POST_FAILURE = "CREATE_POST_FAILURE";
export const CREATE_POST_CLEAR = "CREATE_POST_CLEAR";
export const CREATE_POST_TRIGGER = "CREATE_POST_TRIGGER";

export const CREATE_COMMENT_REQUEST = "CREATE_COMMENT_REQUEST";
export const CREATE_COMMENT_SUCCESS = "CREATE_COMMENT_SUCCESS";
export const CREATE_COMMENT_FAILURE = "CREATE_COMMENT_FAILURE";

export const getPosts = () => {
  return {
    type: GET_POSTS_REQUEST
  };
};

export const createPost = newPost => {
  return {
    type: CREATE_POST_REQUEST,
    payload: newPost
  };
};

export const createPostTrigger = () => {
  return {
    type: CREATE_POST_TRIGGER
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
