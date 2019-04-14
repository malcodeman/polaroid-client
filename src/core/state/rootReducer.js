import { combineReducers } from "redux";

import auth from "../../features/auth/reducers/authReducers";
import posts from "../../features/posts/reducers/postsReducers";
import users from "../../features/users/reducers/usersReducers";

const rootReducer = combineReducers({
  auth,
  posts,
  users
});

export default rootReducer;
