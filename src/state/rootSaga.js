import { all } from "redux-saga/effects";

import {
  watchGetPosts,
  watchCreatePostRequest
} from "../features/posts/sagas/posts_sagas";
import {
  watchSignupRequest,
  watchLoginRequest,
  watchLogoutRequest
} from "../features/auth/sagas/auth_sagas";

import { watchFindMeRequest } from "../features/users/sagas";

export default function* rootSaga() {
  yield all([
    watchGetPosts(),
    watchCreatePostRequest(),
    watchSignupRequest(),
    watchLoginRequest(),
    watchLogoutRequest(),
    watchFindMeRequest()
  ]);
}
