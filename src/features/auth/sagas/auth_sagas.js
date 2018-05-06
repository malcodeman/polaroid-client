import { call, put, takeLatest } from "redux-saga/effects";

import { saveUser as saveUserApi } from "./api";
import {
  SAVE_USER_REQUEST,
  SAVE_USER_SUCCESS,
  SAVE_USER_FAILURE
} from "../actions/auth_actions";

function* saveUser(action) {
  try {
    const data = yield call(saveUserApi, action.payload);
    yield put({ type: SAVE_USER_SUCCESS, payload: data.data });
  } catch (error) {
    yield put({ type: SAVE_USER_FAILURE, error });
  }
}

export function* watchSaveUser() {
  yield takeLatest(SAVE_USER_REQUEST, saveUser);
}
