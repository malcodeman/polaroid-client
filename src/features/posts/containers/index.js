import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import PostLoading from "../components/PostLoading";
import Post from "../components/Post";
import NewPostForm from "./PostsNewForm";

import {
  getPosts,
  createComment,
  createLike,
  destroyLike,
  createBookmark,
  destroyBookmark
} from "../actions/postsActionCreators";

const Container = styled.div`
  max-width: 576px;
  margin: 0 auto;
  padding: 40px 20px;
`;

class Posts extends Component {
  componentDidMount = () => {
    const { getPosts } = this.props;
    getPosts();
  };
  renderPosts = () => {
    const {
      posts,
      createComment,
      createLike,
      destroyLike,
      createBookmark,
      destroyBookmark
    } = this.props;
    if (posts !== null) {
      return this.props.posts.map(post => {
        return (
          <Post
            key={post.id}
            id={post.id}
            username={post.user.username}
            profilePhotoURL={post.user.profilePhotoURL}
            nameFirstLetter={post.user.nameFirstLetter}
            photoURL={post.photoURL}
            createdAt={post.createdAt}
            comments={post.comments}
            likesCount={post.likesCount}
            liked={post.liked}
            bookmarked={post.bookmarked}
            createComment={createComment}
            createBookmark={createBookmark}
            createLike={createLike}
            destroyLike={destroyLike}
            destroyBookmark={destroyBookmark}
          />
        );
      });
    } else {
      return <PostLoading />;
    }
  };
  render() {
    return (
      <Container>
        <NewPostForm />
        {this.renderPosts()}
      </Container>
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
  {
    getPosts,
    createComment,
    createLike,
    destroyLike,
    createBookmark,
    destroyBookmark
  }
)(Posts);
