import React from "react";
import styled from "styled-components";

import heart from "../images/heart.svg";
import heart_liked from "../images/heart_liked.svg";
import comment from "../images/comment.svg";
import save from "../images/save.svg";

const Section = styled.section`
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
`;

const Icon = styled.img`
  height: 20px;
  width: 20px;
  cursor: pointer;
`;

const Actions = props => {
  const { postId, createLike, liked } = props;
  return (
    <Section>
      <div>
        {liked ? (
          <Icon src={heart_liked} />
        ) : (
          <Icon src={heart} onClick={() => createLike(postId)} />
        )}
        <Icon src={comment} />
      </div>
      <Icon src={save} />
    </Section>
  );
};

export default Actions;
