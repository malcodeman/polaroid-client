import Posts from "../../features/posts/containers";
import RootUser from "../../features/users/containers/";
import Settings from "../../features/settings/containers/Settings";

export default [
  {
    path: "/",
    component: Posts,
    exact: true
  },
  {
    path: "/settings",
    component: Settings
  },
  {
    path: "/:username",
    component: RootUser
  }
];
