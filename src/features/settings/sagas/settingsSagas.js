import { call, put, takeLatest } from "redux-saga/effects";

import axios from "../../../core/http";
import {
  UPDATE_NAME_FAILURE,
  UPDATE_NAME_REQUEST,
  UPDATE_NAME_SUCCESS,
  UPDATE_EMAIL_FAILURE,
  UPDATE_EMAIL_REQUEST,
  UPDATE_EMAIL_SUCCESS
} from "../actions/settingsActionTypes";

const updateNameApi = name => {
  return axios.put(`/users/me/name`, name);
};

const updateEmailApi = data => {
  return axios.put(`/users/me/email`, data);
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

const saga = function*() {
  yield takeLatest(UPDATE_NAME_REQUEST, updateName);
  yield takeLatest(UPDATE_EMAIL_REQUEST, updateEmail);
};

export default saga;
