import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${props => props.theme.backgroundSecondary};
  border-radius: ${props => props.theme.borderRadius};
  border: 1px solid ${props => props.theme.borderColor};
  padding: 16px;
  margin-bottom: 24px;
`;

const Title = styled.h2`
  font-size: 0.8rem;
  font-weight: normal;
  color: ${props => props.theme.secondary};
`;

const Stories = () => {
  return (
    <Wrapper>
      <Title>Stories</Title>
    </Wrapper>
  );
};

export default Stories;
