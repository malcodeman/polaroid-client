import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 10px 0;
`;

const Typography = styled.span`
  color: rgba(0, 0, 0, 1);
  font-size: 0.8rem;
`;

const Likes = props => {
  const { likesCount } = props;
  const renderLikes = () => {
    if (likesCount === 0) {
      return <Typography>Be the first to like this</Typography>;
    } else if (likesCount === 1) {
      return <Typography>{likesCount} like</Typography>;
    } else {
      return <Typography>{likesCount} likes</Typography>;
    }
  };
  return <Section>{renderLikes()}</Section>;
};

export default Likes;
