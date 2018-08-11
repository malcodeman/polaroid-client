import { all, fork } from "redux-saga/effects";

import {
  watchGetPosts,
  watchCreatePost,
  watchCreateComment,
  watchCreateLike,
  watchDestroyLike,
  watchCreateBookmark,
  watchDestroyBookmark
} from "../../features/posts/sagas/posts_sagas";
import {
  watchSignupRequest,
  watchLoginRequest,
  watchLogoutRequest
} from "../../features/auth/sagas/auth_sagas";

import {
  watchFindMeRequest,
  watchFindByUsernameRequest,
  watchUpdateMeRequest
} from "../../features/users/sagas";

import settingsSaga from "../../features/settings/sagas/settingsSagas";

export default function* rootSaga() {
  yield all([
    fork(settingsSaga),
    watchGetPosts(),
    watchCreatePost(),
    watchCreateComment(),
    watchCreateLike(),
    watchCreateBookmark(),
    watchDestroyLike(),
    watchDestroyBookmark(),
    watchSignupRequest(),
    watchLoginRequest(),
    watchLogoutRequest(),
    watchFindMeRequest(),
    watchFindByUsernameRequest(),
    watchUpdateMeRequest()
  ]);
}
