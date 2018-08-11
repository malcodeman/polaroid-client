import { call, put, takeLatest } from "redux-saga/effects";

import axios from "../../../core/http";
import {
  UPDATE_NAME_FAILURE,
  UPDATE_NAME_REQUEST,
  UPDATE_NAME_SUCCESS,
  UPDATE_USERNAME_FAILURE,
  UPDATE_USERNAME_REQUEST,
  UPDATE_USERNAME_SUCCESS
} from "../actions/settingsActionTypes";

const updateMeApi = data => {
  return axios.put(`/users/me`, data);
};

function* updateName(action) {
  try {
    const { name } = action.payload;
    const updated = yield call(updateMeApi, { name });
    yield put({ type: UPDATE_NAME_SUCCESS, payload: updated.data });
  } catch (error) {
    yield put({ type: UPDATE_NAME_FAILURE, error });
  } finally {
    const { setSubmitting } = action.meta;
    setSubmitting(false);
  }
}

function* updateUsername(action) {
  try {
    const { username } = action.payload;
    const updated = yield call(updateMeApi, { username });
    yield put({ type: UPDATE_USERNAME_SUCCESS, payload: updated.data });
  } catch (error) {
    yield put({ type: UPDATE_USERNAME_FAILURE, error });
  } finally {
    const { setSubmitting } = action.meta;
    setSubmitting(false);
  }
}

const saga = function*() {
  yield takeLatest(UPDATE_NAME_REQUEST, updateName);
  yield takeLatest(UPDATE_USERNAME_REQUEST, updateUsername);
};

export default saga;
