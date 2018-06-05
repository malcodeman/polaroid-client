import Posts from "../features/posts/components/Posts";
import PostsNew from "../features/posts/components/PostsNew";
import Login from "../features/auth/components/Login";
import Signup from "../features/auth/components/Signup";

export default [
  {
    path: "/posts",
    component: Posts,
    exact: true,
    private: true
  },
  {
    path: "/new-post",
    component: PostsNew,
    private: true
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/signup",
    component: Signup
  }
];
