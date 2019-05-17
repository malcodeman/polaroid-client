import React from "react";
import styled from "styled-components";

const Article = styled.div`
  margin-bottom: 40px;
  padding: 10px;
  border-radius: ${props => props.theme.borderRadius};
  border: 1px solid ${props => props.theme.borderColor};
  background-color: ${props => props.theme.backgroundSecondary};
`;

const Text = styled.div`
  height: 0.8rem;
  width: 25%;
  margin-bottom: 10px;
  background-color: ${props => props.theme.backgroundPrimary};
`;

const Time = styled.div`
  height: 0.6rem;
  width: 10%;
  background-color: ${props => props.theme.backgroundPrimary};
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
