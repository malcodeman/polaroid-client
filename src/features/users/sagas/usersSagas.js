import { call, put, takeLatest } from "redux-saga/effects";

import axios from "../../../core/http";
import {
  FIND_ME_FAILURE,
  FIND_ME_REQUEST,
  FIND_ME_SUCCESS,
  FIND_USER_BY_USERNAME_FAILURE,
  FIND_USER_BY_USERNAME_REQUEST,
  FIND_USER_BY_USERNAME_SUCCESS,
  FIND_SUGGESTIONS_FAILURE,
  FIND_SUGGESTIONS_REQUEST,
  FIND_SUGGESTIONS_SUCCESS
} from "../actions/usersActionTypes";

const findMeApi = () => {
  return axios.get(`/users/me`);
};

const findByUsernameApi = username => {
  return axios.get(`/users/${username}`);
};

const findSuggestionsApi = () => {
  return axios.get(`/users/suggestions`);
};

function* findMe() {
  try {
    const data = yield call(findMeApi);

    yield put({ type: FIND_ME_SUCCESS, payload: data.data });
  } catch (error) {
    yield put({ type: FIND_ME_FAILURE, error });
  }
}

function* findByUsername(action) {
  try {
    const data = yield call(findByUsernameApi, action.payload);

    yield put({ type: FIND_USER_BY_USERNAME_SUCCESS, payload: data.data });
  } catch (error) {
    yield put({ type: FIND_USER_BY_USERNAME_FAILURE, error });
  }
}

function* findSuggestions(action) {
  try {
    const data = yield call(findSuggestionsApi);

    yield put({ type: FIND_SUGGESTIONS_SUCCESS, payload: data.data });
  } catch (error) {
    yield put({ type: FIND_SUGGESTIONS_FAILURE, error });
  }
}

const saga = function*() {
  yield takeLatest(FIND_ME_REQUEST, findMe);
  yield takeLatest(FIND_USER_BY_USERNAME_REQUEST, findByUsername);
  yield takeLatest(FIND_SUGGESTIONS_REQUEST, findSuggestions);
};

export default saga;
