import { all } from "redux-saga/effects";

import {
  watchGetPosts,
  watchCreatePost,
  watchCreateComment
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

export default function* rootSaga() {
  yield all([
    watchGetPosts(),
    watchCreatePost(),
    watchCreateComment(),
    watchSignupRequest(),
    watchLoginRequest(),
    watchLogoutRequest(),
    watchFindMeRequest(),
    watchFindByUsernameRequest(),
    watchUpdateMeRequest()
  ]);
}
