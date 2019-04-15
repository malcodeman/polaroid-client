import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 4px;
  @media (min-width: 768px) {
    grid-gap: 16px;
  }
`;

const Post = styled.img`
  max-width: 100%;
  object-fit: cover;
`;

const Posts = props => {
  const { posts } = props;

  return (
    <Grid>
      {posts.map(post => {
        return <Post key={post.id} src={post.photoURL || post.post.photoURL} />;
      })}
    </Grid>
  );
};

export default Posts;
