import React from "react";
import styled from "styled-components";
import { distanceInWordsToNow } from "date-fns";
import { Link } from "react-router-dom";

const Article = styled.article`
  border-radius: 3px;
  border: 1px solid #e6e6e6;
  background-color: #fff;
  margin-bottom: 40px;
  padding: 10px;
`;

const Header = styled.header`
  margin: 10px 0;
`;

const Text = styled.p`
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.8);
  word-wrap: break-word;
`;

const Time = styled.time`
  font-size: 0.6rem;
  color: rgba(0, 0, 0, 0.6);
  text-transform: uppercase;
`;

const Post = props => {
  return (
    <Article>
      <Header>
        <Link to={`/${props.username}`}>
          <Text>{props.username}</Text>
        </Link>
      </Header>
      <Text>{props.text}</Text>
      <Time>{distanceInWordsToNow(props.createdAt)} ago</Time>
    </Article>
  );
};

export default Post;
