import { call, put, takeLatest } from "redux-saga/effects";
import { push } from "react-router-redux";

import { signup, login, logout } from "./api";
import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE
} from "../actions/auth_actions";

function* signupUser(action) {
  try {
    const data = yield call(signup, action.payload);
    localStorage.setItem("token", data.data.token);
    yield put({ type: SIGNUP_SUCCESS, payload: data.data });
  } catch (error) {
    yield put({ type: SIGNUP_FAILURE, error });
  }
}

export function* watchSignupRequest() {
  yield takeLatest(SIGNUP_REQUEST, signupUser);
}

function* loginUser(action) {
  try {
    const data = yield call(login, action.payload);
    localStorage.setItem("token", data.data.token);
    yield put({ type: LOGIN_SUCCESS, payload: data.data });
  } catch (error) {
    yield put({ type: LOGIN_FAILURE, error });
  }
}

export function* watchLoginRequest() {
  yield takeLatest(LOGIN_REQUEST, loginUser);
}

function* logoutUser(action) {
  try {
    const data = yield call(logout, action.payload);
    localStorage.removeItem("token");
    yield put({ type: LOGOUT_SUCCESS, payload: data.data });
    yield put(push("/login"));
  } catch (error) {
    yield put({ type: LOGOUT_FAILURE, error });
  }
}

export function* watchLogoutRequest() {
  yield takeLatest(LOGOUT_REQUEST, logoutUser);
}
