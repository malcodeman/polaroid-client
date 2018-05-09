import { call, put, takeLatest } from "redux-saga/effects";

import { getPosts as getPostsApi } from "./api";
import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE
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
