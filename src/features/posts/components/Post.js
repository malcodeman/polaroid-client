import React from "react";
import styled from "styled-components";
import { distanceInWordsToNow } from "date-fns";
import { Link } from "react-router-dom";

const Article = styled.article`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

const Header = styled.header`
  padding: 16px 10px;
  border-top: 1px solid #e6e6e6;
  border-right: 1px solid #e6e6e6;
  border-left: 1px solid #e6e6e6;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
`;

const Text = styled.span`
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.8);
`;

const Photo = styled.img`
  max-width: 100%;
`;

const Time = styled.time`
  font-size: 0.6rem;
  color: rgba(0, 0, 0, 0.6);
  text-transform: uppercase;
`;

const Footer = styled.footer`
  padding: 16px 10px;
  border-right: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
  border-left: 1px solid #e6e6e6;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
`;

const Post = props => {
  return (
    <Article>
      <Header>
        <Link to={`/${props.username}`}>
          <Text>{props.username}</Text>
        </Link>
      </Header>
      <Photo src={props.photoURL} />
      <Footer>
        <Time>{distanceInWordsToNow(props.createdAt)} ago</Time>
      </Footer>
    </Article>
  );
};

export default Post;
