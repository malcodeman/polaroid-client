import { call, put, takeLatest } from "redux-saga/effects";

import axios from "../../../core/http";
import {
  SET_NAME_REQUEST,
  SET_NAME_FAILURE,
  SET_NAME_SUCCESS
} from "../actions/settingsActionTypes";

const updateMeApi = data => {
  return axios.put(`/users/me`, data);
};

function* setName(action) {
  try {
    const { name } = action.payload;
    const updated = yield call(updateMeApi, { name });
    yield put({ type: SET_NAME_SUCCESS, payload: updated.data });
  } catch (error) {
    yield put({ type: SET_NAME_FAILURE, error });
  } finally {
    const { setSubmitting } = action.meta;
    setSubmitting(false);
  }
}
const saga = function*() {
  yield takeLatest(SET_NAME_REQUEST, setName);
};

export default saga;
