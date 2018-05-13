import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Post from "./Post";
import Header from "./Header";
import { getPosts } from "../actions/posts_actions";

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
    this.props.getPosts();
  };
  render() {
    return (
      <Wrapper>
        <Header />
        <PostsSection>
          <Container>
            {this.props.loading ? (
              <p>Loading...</p>
            ) : this.props.posts.length === 0 ? (
              <p>No posts</p>
            ) : (
              this.props.posts.map(post => {
                return (
                  <Post
                    key={post.id}
                    text={post.text}
                    createdAt={post.createdAt}
                  />
                );
              })
            )}
          </Container>
        </PostsSection>
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

const mapDispatchToProps = dispatch => {
  return {
    getPosts: () => dispatch(getPosts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
