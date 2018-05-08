import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Post from "./Post";
import { getPosts } from "../actions/posts_actions";

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
      <PostsSection>
        <Container>
          {this.props.posts.length > 0 ? (
            this.props.posts.map(post => {
              return (
                <Post
                  key={post.id}
                  text={post.text}
                  createdAt={post.createdAt}
                />
              );
            })
          ) : (
            <p>No posts.</p>
          )}
        </Container>
      </PostsSection>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPosts: () => dispatch(getPosts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
