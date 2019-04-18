import React from "react";
import { connect } from "react-redux";

import Header from "../components/Header";
import Posts from "../components/Posts";
import { findUserByUsername } from "../actions/usersActionCreators";

class User extends React.Component {
  componentDidMount = () => {
    const { username, findUserByUsername } = this.props;

    findUserByUsername(username);
  };

  render() {
    const { user } = this.props;

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
  }
}

const mapStateToProps = state => {
  return {
    user: state.users.user
  };
};

export default connect(
  mapStateToProps,
  { findUserByUsername }
)(User);
