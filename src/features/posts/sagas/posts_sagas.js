import { call, put, takeLatest } from "redux-saga/effects";

import axios from "../../../core/http";
import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE,
  CREATE_COMMENT_FAILURE,
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS,
  CREATE_LIKE_FAILURE,
  CREATE_LIKE_REQUEST,
  CREATE_LIKE_SUCCESS,
  DESTROY_LIKE_FAILURE,
  DESTROY_LIKE_REQUEST,
  DESTROY_LIKE_SUCCESS,
  CREATE_BOOKMARK_FAILURE,
  CREATE_BOOKMARK_REQUEST,
  CREATE_BOOKMARK_SUCCESS,
  DESTROY_BOOKMARK_FAILURE,
  DESTROY_BOOKMARK_REQUEST,
  DESTROY_BOOKMARK_SUCCESS
} from "../actions/posts_actions";

const getPostsApi = () => {
  return axios.get(`/posts`);
};

const createPostApi = post => {
  return axios.post(`/posts`, post);
};

const createCommentApi = comment => {
  return axios.post(`/comments`, comment);
};

const createLikeApi = like => {
  return axios.post(`/likes`, like);
};

const destroyLikeApi = likeId => {
  return axios.delete(`/likes/${likeId}`);
};

const createBookmarkApi = like => {
  return axios.post(`/bookmarks`, like);
};

const destroyBookmarkApi = bookmarkId => {
  return axios.delete(`/bookmarks/${bookmarkId}`);
};

function* getPosts() {
  try {
    const data = yield call(getPostsApi);
    yield put({ type: GET_POSTS_SUCCESS, payload: data.data });
  } catch (error) {
    yield put({ type: GET_POSTS_FAILURE, error });
  }
}

function* createPost(action) {
  try {
    const { photoURL } = action.payload;
    const data = yield call(createPostApi, { photoURL });
    yield put({ type: CREATE_POST_SUCCESS, payload: data.data });
  } catch (error) {
    yield put({ type: CREATE_POST_FAILURE, error });
  } finally {
    const { setSubmitting, resetForm } = action.meta;
    setSubmitting(false);
    resetForm();
  }
}

function* createComment(action) {
  try {
    const data = yield call(createCommentApi, action.payload);
    yield put({ type: CREATE_COMMENT_SUCCESS, payload: data.data });
  } catch (error) {
    yield put({ type: CREATE_COMMENT_FAILURE, error });
  }
}

function* createLike(action) {
  try {
    const data = yield call(createLikeApi, action.payload);
    yield put({ type: CREATE_LIKE_SUCCESS, payload: data.data });
  } catch (error) {
    yield put({ type: CREATE_LIKE_FAILURE, error });
  }
}

function* destroyLike(action) {
  try {
    const data = yield call(destroyLikeApi, action.payload);
    yield put({ type: DESTROY_LIKE_SUCCESS, payload: data.data });
  } catch (error) {
    yield put({ type: DESTROY_LIKE_FAILURE, error });
  }
}

function* createBookmark(action) {
  try {
    const data = yield call(createBookmarkApi, action.payload);
    yield put({ type: CREATE_BOOKMARK_SUCCESS, payload: data.data });
  } catch (error) {
    yield put({ type: CREATE_BOOKMARK_FAILURE, error });
  }
}

function* destroyBookmark(action) {
  try {
    const data = yield call(destroyBookmarkApi, action.payload);
    yield put({ type: DESTROY_BOOKMARK_SUCCESS, payload: data.data });
  } catch (error) {
    yield put({ type: DESTROY_BOOKMARK_FAILURE, error });
  }
}

export function* watchGetPosts() {
  yield takeLatest(GET_POSTS_REQUEST, getPosts);
}

export function* watchCreatePost() {
  yield takeLatest(CREATE_POST_REQUEST, createPost);
}

export function* watchCreateComment() {
  yield takeLatest(CREATE_COMMENT_REQUEST, createComment);
}

export function* watchCreateLike() {
  yield takeLatest(CREATE_LIKE_REQUEST, createLike);
}

export function* watchDestroyLike() {
  yield takeLatest(DESTROY_LIKE_REQUEST, destroyLike);
}

export function* watchCreateBookmark() {
  yield takeLatest(CREATE_BOOKMARK_REQUEST, createBookmark);
}

export function* watchDestroyBookmark() {
  yield takeLatest(DESTROY_BOOKMARK_REQUEST, destroyBookmark);
}
