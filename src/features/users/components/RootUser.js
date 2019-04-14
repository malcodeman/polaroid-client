import React from "react";
import { connect } from "react-redux";

import Profile from "../containers/Profile";
import User from "../containers/User";

const RootUser = props => {
  const { username } = props.match.params;
  const { me } = props;

  if (username === me.username) {
    return <Profile />;
  }
  return <User username={username} />;
};

const mapStateToProps = state => {
  return {
    me: state.users.me
  };
};

export default connect(
  mapStateToProps,
  null
)(RootUser);
