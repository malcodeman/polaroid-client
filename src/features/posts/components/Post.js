import React from "react";
import styled from "styled-components";

const Article = styled.article`
  border-radius: 3px;
  border: 1px solid #e6e6e6;
  background-color: #fff;
  margin-bottom: 40px;
`;

const Text = styled.p`
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.8);
`;

const Post = props => {
  return (
    <Article>
      <Text>{props.text}</Text>
    </Article>
  );
};

export default Post;
