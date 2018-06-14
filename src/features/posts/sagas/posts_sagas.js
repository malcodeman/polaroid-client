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
  CREATE_COMMENT_SUCCESS
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
    const data = yield call(createPostApi, action.payload);
    yield put({ type: CREATE_POST_SUCCESS, payload: data.data });
  } catch (error) {
    yield put({ type: CREATE_POST_FAILURE, error });
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

export function* watchGetPosts() {
  yield takeLatest(GET_POSTS_REQUEST, getPosts);
}

export function* watchCreatePost() {
  yield takeLatest(CREATE_POST_REQUEST, createPost);
}

export function* watchCreateComment() {
  yield takeLatest(CREATE_COMMENT_REQUEST, createComment);
}
