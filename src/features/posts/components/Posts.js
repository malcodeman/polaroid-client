import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Post from "./Post";
import { getPosts } from "../actions/posts_actions";

const PostsSection = styled.section`
  padding: 20px;
`;

class Posts extends Component {
  componentDidMount = () => {
    this.props.getPosts();
  };
  render() {
    return (
      <PostsSection>
        Posts
        {this.props.posts.map(post => {
          return <Post key={post._id} text={post.text} />;
        })}
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
