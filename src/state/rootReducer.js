import { combineReducers } from "redux";

import posts from "../features/posts/reducers/posts_reducers";

const rootReducer = combineReducers({ posts });

export default rootReducer;
