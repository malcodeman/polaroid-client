import React from "react";
import styled from "styled-components";

const Article = styled.div`
  border-radius: 3px;
  border: 1px solid #e6e6e6;
  background-color: #fff;
  margin-bottom: 40px;
  padding: 10px;
`;

const Text = styled.div`
  height: 0.8rem;
  background-color: rgba(0, 0, 0, 0.1);
  width: 25%;
  margin-bottom: 10px;
`;

const Time = styled.div`
  height: 0.6rem;
  background-color: rgba(0, 0, 0, 0.1);
  width: 10%;
`;

const PostLoading = () => {
  return (
    <Article>
      <Text />
      <Time />
    </Article>
  );
};

export default PostLoading;
