import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-gap: 4px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  @media (min-width: 768px) {
    grid-gap: 10px;
  }
`;

const Post = styled.img`
  max-width: 100%;
  height: 100%;
  object-fit: cover;
`;

const NoPosts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`;

const Posts = props => {
  const { posts } = props;
  return posts && posts.length > 0 ? (
    <Grid>
      {posts.map(post => {
        return <Post key={post.id} src={post.photoURL} />;
      })}
    </Grid>
  ) : (
    <NoPosts>No posts yet</NoPosts>
  );
};

export default Posts;
