import React from "react";
import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
`;

const StyledLoader = styled.div`
  border: 2px solid #000;
  border-radius: 50%;
  border-top: 2px solid #fff;
  width: 16px;
  height: 16px;
  margin: 0 4px;
  animation: ${rotate360} 2s linear infinite;
`;

const Message = styled.span`
  font-size: 0.8rem;
  color: #fff;
`;

const Loader = props => {
  return (
    <LoaderWrapper>
      <StyledLoader />
      {props.message && <Message>{props.message}</Message>}
    </LoaderWrapper>
  );
};

export default Loader;
