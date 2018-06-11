import Posts from "../../features/posts/containers";
import PostsNew from "../../features/posts/containers/PostsNew";
import Login from "../../features/auth/containers/Login";
import Signup from "../../features/auth/containers/Signup";
import RootUser from "../../features/users/containers/";

export default [
  {
    path: "/",
    component: Posts,
    exact: true,
    private: true
  },
  {
    path: "/posts",
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
  },
  {
    path: "/:username",
    component: RootUser,
    private: true
  }
];
