import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "../components/Header";
import Posts from "../components/Posts";
import { findUserByUsername } from "../actions/usersActionCreators";

const User = (props) => {
  const { username } = props;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);

  React.useEffect(() => {
    dispatch(findUserByUsername(username));
  }, [username, dispatch]);

  return (
    <>
      <Header
        profilePhotoURL={user.profilePhotoURL}
        nameFirstLetter={user.nameFirstLetter}
        username={user.username}
        name={user.name}
        postsLength={user.posts.length}
      />
      <Posts posts={user.posts} />
    </>
  );
};

export default User;
