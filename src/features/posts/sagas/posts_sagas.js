import { call, put, takeLatest } from "redux-saga/effects";

import { getPosts as getPostsApi, createPost as createPostApi } from "./api";
import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE
} from "../actions/posts_actions";

function* getPosts() {
  try {
    const data = yield call(getPostsApi);
    yield put({ type: GET_POSTS_SUCCESS, payload: data.data });
  } catch (error) {
    yield put({ type: GET_POSTS_FAILURE, error });
  }
}

export function* watchGetPosts() {
  yield takeLatest(GET_POSTS_REQUEST, getPosts);
}

function* createPost(action) {
  try {
    const data = yield call(createPostApi, action.payload);
    yield put({ type: CREATE_POST_SUCCESS, payload: data.data });
  } catch (error) {
    yield put({ type: CREATE_POST_FAILURE, error });
  }
}

export function* watchCreatePostRequest() {
  yield takeLatest(CREATE_POST_REQUEST, createPost);
}
