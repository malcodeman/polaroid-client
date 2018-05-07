import { call, put, takeLatest } from "redux-saga/effects";

import { saveUser as saveUserApi } from "./api";
import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE
} from "../actions/auth_actions";

function* saveUser(action) {
  try {
    const data = yield call(saveUserApi, action.payload);
    localStorage.setItem("token", data.data);
    yield put({ type: SIGNUP_SUCCESS, payload: data.data });
  } catch (error) {
    yield put({ type: SIGNUP_FAILURE, error });
  }
}

export function* watchSaveUser() {
  yield takeLatest(SIGNUP_REQUEST, saveUser);
}
