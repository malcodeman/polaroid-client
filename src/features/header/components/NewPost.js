import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = styled.button`
  font-size: 0.8rem;
  color: #007aff;
  margin: 0 6px;
  border: 0;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
`;

const NewPost = () => {
  return (
    <Link to="/posts">
      <Button>New Post</Button>
    </Link>
  );
};

export default NewPost;
