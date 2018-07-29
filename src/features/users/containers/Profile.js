import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import Posts from "../components/Posts";

const Section = styled.section`
  padding: 20px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
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
          <Section>
            <Posts posts={me.posts} />
          </Section>
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
