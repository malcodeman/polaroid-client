import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import PostLoading from "./PostLoading";
import Post from "./Post";
import Header from "../../header/components/Header";

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

const Button = styled.button`
  font-size: 0.8rem;
  color: #007aff;
  margin: 0 6px;
  border: 0;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
`;

class Posts extends Component {
  componentDidMount = () => {
    const { me } = this.props;
    if (me === null) {
      this.props.findMe();
    }
    this.props.getPosts();
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
          <Post key={post.id} text={post.text} createdAt={post.createdAt} />
        );
      });
    }
  };
  render() {
    return (
      <Wrapper>
        <Header>
          <Link to="/posts">
            <Button>New Post</Button>
          </Link>
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
