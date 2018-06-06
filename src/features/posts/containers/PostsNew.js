import React, { Component } from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import PostsNewForm from "./PostsNewForm";
import Header from "../../header/components/Header"

import {
  createPost,
  createPostClear,
  createPostTrigger
} from "../actions/posts_actions";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const PostsNewSection = styled.section`
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

class PostsNew extends Component {
  componentWillUnmount = () => {
    this.props.createPostClear();
  };
  render() {
    if (this.props.create_post_success) {
      return <Redirect to="/" />;
    }
    return (
      <Wrapper>
        <Header>
          <Button onClick={this.props.createPostTrigger}>
            Post
          </Button>
        </Header>
        <PostsNewSection>
          <Container>
            <PostsNewForm
              createPost={this.props.createPost}
              createPostClear={this.props.createPostClear}
              createPostTrigger={this.props.create_post_trigger}
            />
          </Container>
        </PostsNewSection>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    create_post_success: state.posts.create_post_success,
    create_post_trigger: state.posts.create_post_trigger
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createPost: newPost => dispatch(createPost(newPost)),
    createPostClear: () => dispatch(createPostClear()),
    createPostTrigger: () => dispatch(createPostTrigger())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsNew);
