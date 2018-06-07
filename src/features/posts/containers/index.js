import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import PostLoading from "../components/PostLoading";
import Post from "../components/Post";
import Header from "../../header/components/Header";
import NewPost from "../../header/components/NewPost";

import { getPosts } from "../actions/posts_actions";
import { findMe } from "../../users/actions";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const PostsSection = styled.section`
  flex-grow: 1;
`;

const Container = styled.div`
  padding: 40px 20px;
  max-width: 992px;
  margin: 0 auto;
`;

class Posts extends Component {
  componentDidMount = () => {
    // findMe should be called here since Posts is root route
    const { me, findMe, getPosts } = this.props;
    if (me === null) {
      findMe();
    }
    getPosts();
  };
  renderLoading = () => {
    return this.props.loading ? <PostLoading /> : null;
  };
  renderPosts = () => {
    if (this.props.posts.length === 0 && this.props.loading === false) {
      return <p>No posts</p>;
    } else {
      return this.props.posts.map(post => {
        return (
          <Post
            key={post.id}
            username={post.user.username}
            text={post.text}
            createdAt={post.createdAt}
          />
        );
      });
    }
  };
  render() {
    return (
      <Wrapper>
        <Header>
          <NewPost />
        </Header>
        <PostsSection>
          <Container>
            {this.renderLoading()}
            {this.renderPosts()}
          </Container>
        </PostsSection>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    me: state.users.me,
    posts: state.posts.posts,
    loading: state.posts.loading
  };
};

export default connect(
  mapStateToProps,
  { findMe, getPosts }
)(Posts);
