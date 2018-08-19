import { call, put, takeLatest } from "redux-saga/effects";
import { push } from "react-router-redux";

import axios from "../../../core/http";

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
} from "../actions/authActionTypes";

import { UNLOAD_ME } from "../../users/actions";

const signup = newUser => {
  return axios.post(`auth/signup`, newUser);
};

const login = user => {
  return axios.post(`/auth/login`, user);
};

const logout = user => {
  return axios.post(`/auth/logout`, user);
};

function* signupUser(action) {
  const { setSubmitting } = action.meta;
  try {
    const { email, name, username, password } = action.payload;
    const data = yield call(signup, { email, name, username, password });
    const { token } = data.data;
    localStorage.setItem("token", token);
    yield put({ type: SIGNUP_SUCCESS, payload: data.data });
    setSubmitting(false);
    yield put(push("/"));
  } catch (error) {
    yield put({ type: SIGNUP_FAILURE, error });
    setSubmitting(false);
  }
}

function* loginUser(action) {
  const { setSubmitting } = action.meta;
  try {
    const { username, password } = action.payload;
    const data = yield call(login, { username, password });
    const { token } = data.data;
    localStorage.setItem("token", token);
    yield put({ type: LOGIN_SUCCESS, payload: data.data });
    setSubmitting(false);
    yield put(push("/"));
  } catch (error) {
    yield put({ type: LOGIN_FAILURE, error });
    setSubmitting(false);
  }
}

function* logoutUser(action) {
  try {
    const data = yield call(logout, action.payload);
    localStorage.removeItem("token");
    yield put({ type: LOGOUT_SUCCESS, payload: data.data });
    yield put({ type: UNLOAD_ME });
    yield put(push("/"));
  } catch (error) {
    yield put({ type: LOGOUT_FAILURE, error });
  }
}

const saga = function*() {
  yield takeLatest(LOGIN_REQUEST, loginUser);
  yield takeLatest(SIGNUP_REQUEST, signupUser);
  yield takeLatest(LOGOUT_REQUEST, logoutUser);
};

export default saga;
