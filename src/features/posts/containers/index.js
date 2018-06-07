import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import PostLoading from "../components/PostLoading";
import Post from "../components/Post";
import Header from "../../header/components/Header";
import NewPost from "../../header/components/NewPost";

import { getPosts } from "../actions/posts_actions";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  padding: 40px 20px;
  max-width: 576px;
  margin: 0 auto;
`;

class Posts extends Component {
  componentDidMount = () => {
    const { getPosts } = this.props;
    getPosts();
  };
  renderPosts = () => {
    const { posts } = this.props;
    if (posts !== null) {
      return this.props.posts.map(post => {
        return (
          <Post
            key={post.id}
            username={post.user.username}
            photoURL={post.photoURL}
            createdAt={post.createdAt}
          />
        );
      });
    } else {
      return <PostLoading />;
    }
  };
  render() {
    return (
      <Wrapper>
        <Header>
          <NewPost />
        </Header>
        <div>
          <Container>{this.renderPosts()}</Container>
        </div>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts.posts,
    loading: state.posts.loading
  };
};

export default connect(
  mapStateToProps,
  { getPosts }
)(Posts);
