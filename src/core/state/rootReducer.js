import { combineReducers } from "redux";

import posts from "../../features/posts/reducers/postsReducers";
import users from "../../features/users/reducers/usersReducers";

const rootReducer = combineReducers({
  posts,
  users
});

export default rootReducer;
