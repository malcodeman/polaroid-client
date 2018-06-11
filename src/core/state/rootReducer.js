import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import auth from "../../features/auth/reducers/auth_reducers";
import posts from "../../features/posts/reducers/posts_reducers";
import users from "../../features/users/reducers";

const rootReducer = combineReducers({
  auth,
  posts,
  users,
  router: routerReducer
});

export default rootReducer;
