import React from "react";
import styled from "styled-components";

const StyledNotifications = styled.div`
  padding: 16px;
  border-radius: ${props => props.theme.borderRadius};
  border: 1px solid ${props => props.theme.borderColor};
  background-color ${props => props.theme.backgroundSecondary};
`;

const Title = styled.h2`
  font-size: 1rem;
  margin-bottom: 24px;
  color: ${props => props.theme.primary};
`;

const Notification = () => {
  return (
    <StyledNotifications>
      <Title>Notifications</Title>
    </StyledNotifications>
  );
};

export default Notification;
