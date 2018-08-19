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
  watchFindMeRequest,
  watchFindByUsernameRequest,
  watchUpdateMeRequest
} from "../../features/users/sagas";

import authSaga from "../../features/auth/sagas/authSagas";
import settingsSaga from "../../features/settings/sagas/settingsSagas";

export default function* rootSaga() {
  yield all([
    fork(settingsSaga),
    fork(authSaga),
    watchGetPosts(),
    watchCreatePost(),
    watchCreateComment(),
    watchCreateLike(),
    watchCreateBookmark(),
    watchDestroyLike(),
    watchDestroyBookmark(),
    watchFindMeRequest(),
    watchFindByUsernameRequest(),
    watchUpdateMeRequest()
  ]);
}
