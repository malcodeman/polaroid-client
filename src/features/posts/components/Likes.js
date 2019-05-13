import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 0 16px;
  margin-bottom: 8px;
`;

const Text = styled.span`
  font-size: 0.8rem;
  color: ${props => props.theme.primary};
  font-weight: ${props => (props.bold ? "600" : "normal")};
`;

const Button = styled.button`
  font-size: 0.8rem;
  font-weight: 600;
  border: 0;
  padding: 0;
  cursor: pointer;
  background-color: transparent;
  color: ${props => props.theme.primary};
`;

const Likes = props => {
  const { likesCount, postId, createLike } = props;

  const renderLikes = () => {
    if (likesCount === 0) {
      return (
        <Text>
          Be the first to{" "}
          <Button onClick={() => createLike(postId)}>like this</Button>
        </Text>
      );
    } else if (likesCount === 1) {
      return <Text bold>{likesCount} like</Text>;
    }
    return <Text bold>{likesCount} likes</Text>;
  };
  return <Section>{renderLikes()}</Section>;
};

export default Likes;
