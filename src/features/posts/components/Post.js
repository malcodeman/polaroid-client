import React from "react";
import styled from "styled-components";
import { distanceInWordsToNow } from "date-fns";
import { Link } from "react-router-dom";

import Actions from "../components/Actions";
import Likes from "./Likes";
import Comments from "./Comments";
import CommentForm from "../containers/CommentForm";

const Article = styled.article`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

const Header = styled.header`
  padding: 16px 10px;
  border-top: 1px solid #e6e6e6;
  border-right: 1px solid #e6e6e6;
  border-left: 1px solid #e6e6e6;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
`;

const ProfilePhoto = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const NameFirstLetter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
  color: #fff;
  font-size: 0.8rem;
  background-color: #007aff;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
`;

const Text = styled.span`
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.8);
`;

const Photo = styled.img`
  max-width: 100%;
  object-fit: cover;
`;

const Time = styled.time`
  font-size: 0.6rem;
  color: rgba(0, 0, 0, 0.6);
  text-transform: uppercase;
  padding-bottom: 10px;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  border-right: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
  border-left: 1px solid #e6e6e6;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
`;

const Post = props => {
  const { post } = props;

  return (
    <Article>
      <Header>
        <StyledLink to={`/${post.user.username}`}>
          {post.user.profilePhotoURL ? (
            <ProfilePhoto src={post.user.profilePhotoURL} />
          ) : (
            <NameFirstLetter>{post.user.nameFirstLetter}</NameFirstLetter>
          )}
          <Text>{post.user.username}</Text>
        </StyledLink>
      </Header>
      <Photo src={post.photoURL} />
      <Footer>
        <Actions
          createLike={props.createLike}
          createBookmark={props.createBookmark}
          destroyBookmark={props.destroyBookmark}
          destroyLike={props.destroyLike}
          postId={post.id}
          liked={post.liked}
          bookmarked={post.bookmarked}
        />
        <Likes likesCount={post.likesCount} />
        <Comments comments={post.comments} />
        <Time>{distanceInWordsToNow(post.createdAt)} ago</Time>
        <CommentForm createComment={props.createComment} postId={post.id} />
      </Footer>
    </Article>
  );
};

export default Post;
