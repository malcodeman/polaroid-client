import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  font-size: 1rem;
  margin-bottom: 24px;
  color: ${props => props.theme.primary};
`;

const Notification = () => {
  return (
    <>
      <Title>Notifications</Title>
    </>
  );
};

export default Notification;
