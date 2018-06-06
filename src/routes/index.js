import Posts from "../features/posts/components/Posts";
import PostsNew from "../features/posts/components/PostsNew";
import Login from "../features/auth/components/Login";
import Signup from "../features/auth/components/Signup";
import Profile from "../features/users/containers/Profile";

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
    component: Profile,
    private: true
  }
];
