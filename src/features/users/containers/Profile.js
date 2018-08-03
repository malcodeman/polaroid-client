import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { NavLink, withRouter, Route } from 'react-router-dom';

import Header from '../components/Header';
import Posts from '../components/Posts';

const PostsHeader = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

const StyledNavLink = styled(NavLink)`
  ${props => (props.margin ? 'margin-right: 48px;' : '')};
  height: 48px;
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.4);
  &.active {
    color: rgba(0, 0, 0, 0.8);
    border-top: 1px solid rgba(0, 0, 0, 0.8);
    margin-top: -1px;
  }
`;

const Message = styled.p`
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.4);
  margin: 24px 0;
`;

class Profile extends Component {
  renderMe = () => {
    const { url } = this.props.match;
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
            bookmarksLength={me.bookmarks.length}
          />
          <React.Fragment>
            <PostsHeader>
              <StyledNavLink margin="true" to={url} exact>
                Posts
              </StyledNavLink>
              <StyledNavLink to={`${url}/bookmarks`}>Bookmarks</StyledNavLink>
            </PostsHeader>
            <Route
              path={url}
              exact
              render={() => (
                <React.Fragment>
                  <Posts posts={me.posts} />
                </React.Fragment>
              )}
            />
            <Route
              path={`${url}/bookmarks`}
              render={() => (
                <React.Fragment>
                  <Message>Only you can see what you've saved</Message>
                  <Posts posts={me.bookmarks} />
                </React.Fragment>
              )}
            />
          </React.Fragment>
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

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(Profile)
);
