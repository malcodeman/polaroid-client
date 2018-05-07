import { combineReducers } from "redux";

import auth from "../features/auth/reducers/auth_reducers";
import posts from "../features/posts/reducers/posts_reducers";

const rootReducer = combineReducers({ auth, posts });

export default rootReducer;
