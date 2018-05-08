import { all } from "redux-saga/effects";

import { watchGetPosts } from "../features/posts/sagas/posts_sagas";
import {
  watchSaveUser,
  watchLoginRequest
} from "../features/auth/sagas/auth_sagas";

export default function* rootSaga() {
  yield all([watchGetPosts(), watchSaveUser(), watchLoginRequest()]);
}
