import { call, put, takeLatest } from "redux-saga/effects";

import axios from "../../../state/axios";
import { FIND_ME_FAILURE, FIND_ME_REQUEST, FIND_ME_SUCCESS } from "../actions";

const findMeApi = () => {
  return axios.get(`/users/me`);
};

function* findMe(action) {
  try {
    const data = yield call(findMeApi);
    yield put({ type: FIND_ME_SUCCESS, payload: data.data });
  } catch (error) {
    yield put({ type: FIND_ME_FAILURE, error });
  }
}

export function* watchFindMeRequest() {
  yield takeLatest(FIND_ME_REQUEST, findMe);
}
