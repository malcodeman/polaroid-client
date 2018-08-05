import React, { Component } from "react";
import { connect } from "react-redux";

import Profile from "./Profile";
import User from "./User";

class Root extends Component {
  renderUser = () => {
    const { username } = this.props.match.params;
    const { me } = this.props;
    if (me !== null) {
      if (username === me.username) {
        return <Profile />;
      } else {
        return <User username={username} />;
      }
    }
  };
  render() {
    return this.renderUser();
  }
}

const mapStateToProps = state => {
  return {
    me: state.users.me
  };
};

export default connect(
  mapStateToProps,
  null
)(Root);
