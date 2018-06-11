import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import ProfilePhoto from "./ProfilePhoto";
import Header from "../components/Header";
import Posts from "../components/Posts";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 10px;
  margin-bottom: 20px;
`;

const Text = styled.span`
  display: flex;
  flex-direction: column;
`;

const Typography = styled.span`
  font-size: 0.8rem;
  margin: 4px 0;
`;

class Profile extends Component {
  renderMe = () => {
    const { me, loading, error } = this.props;
    if (loading) {
      return <p>Loading...</p>;
    } else if (error) {
      return <p>Sorry, this page isn't available.</p>;
    } else if (me !== null && loading === false && error === false) {
      return (
        <React.Fragment>
          <Header
            profile={true}
            profilePhotoURL={me.profilePhotoURL}
            nameFirstLetter={me.nameFirstLetter}
            username={me.username}
            name={me.name}
            email={me.email}
            postsLength={me.posts.length}
          />
          <Posts posts={me.posts} />
        </React.Fragment>
      );
    }
  };
  render() {
    return <div>{this.renderMe()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    me: state.users.me,
    loading: state.users.loading,
    error: state.users.error
  };
};

export default connect(
  mapStateToProps,
  null
)(Profile);
