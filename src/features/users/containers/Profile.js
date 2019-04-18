import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { NavLink, Route } from "react-router-dom";

import Header from "../components/Header";
import Posts from "../components/Posts";

const PostsHeader = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid ${props => props.theme.borderColor};
`;

const StyledNavLink = styled(NavLink)`
  height: 48px;
  display: flex;
  align-items: center;
  margin-top: -1px;
  border-top: 1px solid transparent;
  text-transform: uppercase;
  font-size: 0.8rem;
  color: ${props => props.theme.secondary};
  :not(:last-child) {
    margin-right: 48px;
  }
  &.active {
    color: ${props => props.theme.primary};
    border-top: 1px solid ${props => props.theme.primary};
  }
`;

const Message = styled.p`
  font-size: 0.8rem;
  margin: 24px 0;
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
  }
  color: ${props => props.theme.secondary};
`;

class Profile extends React.Component {
  render() {
    const { me, username } = this.props;

    return (
      <>
        <Header
          profilePhotoURL={me.profilePhotoURL}
          nameFirstLetter={me.nameFirstLetter}
          username={me.username}
          name={me.name}
          email={me.email}
          postsLength={me.posts.length}
          bookmarksLength={me.bookmarks.length}
        />
        <>
          <PostsHeader>
            <StyledNavLink exact to={`/${username}`}>
              Posts
            </StyledNavLink>
            <StyledNavLink to={`/${username}/bookmarks`}>
              Bookmarks
            </StyledNavLink>
          </PostsHeader>
          <Route
            exact
            path={`/${username}`}
            render={() => <Posts posts={me.posts} />}
          />
          <Route
            path={`/${username}/bookmarks`}
            render={() => (
              <>
                <Message>Only you can see what you've saved</Message>
                <Posts posts={me.bookmarks} />
              </>
            )}
          />
        </>
      </>
    );
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
)(Profile);
