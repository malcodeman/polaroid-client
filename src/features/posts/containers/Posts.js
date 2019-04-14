import React from "react";
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
  padding: 24px;
  max-width: 576px;
  margin: 0 auto;
`;

class Posts extends React.Component {
  componentDidMount = () => {
    const { getPosts } = this.props;

    getPosts();
  };

  render() {
    const {
      posts,
      loading,
      createComment,
      createBookmark,
      destroyBookmark,
      createLike,
      destroyLike
    } = this.props;

    return (
      <Container>
        <NewPostForm />
        {posts.length === 0 && loading && <PostLoading />}
        {posts.map(post => {
          return (
            <Post
              key={post.id}
              post={post}
              createComment={createComment}
              createBookmark={createBookmark}
              createLike={createLike}
              destroyLike={destroyLike}
              destroyBookmark={destroyBookmark}
            />
          );
        })}
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
