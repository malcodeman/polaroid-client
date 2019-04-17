import { call, put, takeLatest } from "redux-saga/effects";

import axios from "../../../core/http";
import {
  UPDATE_NAME_SUCCESS,
  UPDATE_NAME_FAILURE,
  UPDATE_NAME_REQUEST,
  UPDATE_EMAIL_SUCCESS,
  UPDATE_EMAIL_FAILURE,
  UPDATE_EMAIL_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAILURE,
  UPDATE_PASSWORD_REQUEST
} from "../actions/settingsActionTypes";

const updateNameApi = name => {
  return axios.put(`/users/me/name`, name);
};

const updateEmailApi = data => {
  return axios.put(`/users/me/email`, data);
};

const updatePasswordApi = data => {
  return axios.put(`/users/me/password`, data);
};

function* updateName(action) {
  try {
    const { toggleNameForm } = action.meta;
    const updated = yield call(updateNameApi, action.payload);

    toggleNameForm();
    yield put({ type: UPDATE_NAME_SUCCESS, payload: updated.data });
  } catch (error) {
    yield put({ type: UPDATE_NAME_FAILURE, error });
  } finally {
    const { setSubmitting } = action.meta;

    setSubmitting(false);
  }
}

function* updateEmail(action) {
  try {
    const { toggleEmailForm } = action.meta;
    const updated = yield call(updateEmailApi, action.payload);

    toggleEmailForm();
    yield put({ type: UPDATE_EMAIL_SUCCESS, payload: updated.data });
  } catch (error) {
    const { setFieldError } = action.meta;
    const exception = error.data.exception;

    switch (exception) {
      case "NotAuthorizedException":
        setFieldError("password", "Invalid password");
        break;
      default:
        setFieldError("general", "Something went wrong");
    }

    yield put({ type: UPDATE_EMAIL_FAILURE, error });
  } finally {
    const { setSubmitting } = action.meta;

    setSubmitting(false);
  }
}

function* updatePassword(action) {
  try {
    const { togglePasswordForm } = action.meta;
    const updated = yield call(updatePasswordApi, action.payload);

    togglePasswordForm();
    yield put({ type: UPDATE_PASSWORD_SUCCESS, payload: updated.data });
  } catch (error) {
    const { setFieldError } = action.meta;
    const exception = error.data.exception;

    switch (exception) {
      case "NotAuthorizedException":
        setFieldError("currentPassword", "Invalid password");
        break;
      default:
        setFieldError("general", "Something went wrong");
    }

    yield put({ type: UPDATE_PASSWORD_FAILURE, error });
  } finally {
    const { setSubmitting } = action.meta;

    setSubmitting(false);
  }
}

const saga = function*() {
  yield takeLatest(UPDATE_NAME_REQUEST, updateName);
  yield takeLatest(UPDATE_EMAIL_REQUEST, updateEmail);
  yield takeLatest(UPDATE_PASSWORD_REQUEST, updatePassword);
};

export default saga;
