import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Span = styled(Link)`
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.8);
  @media (min-width: 576px) {
    display: none;
  }
`;

const GoBack = () => {
  return <Span to="/settings">Go back</Span>;
};

export default GoBack;
