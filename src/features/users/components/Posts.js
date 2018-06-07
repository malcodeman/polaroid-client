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

const Posts = props => {
  return (
    <Grid>
      {props.posts.map(post => {
        return <Post key={post.id} src={post.photoURL} />;
      })}
    </Grid>
  );
};

export default Posts;
