import React from "react";
import styled from "styled-components";
import { formatDistanceToNow } from "date-fns";
import { Link } from "react-router-dom";

import Actions from "../components/Actions";
import Likes from "./Likes";
import Comments from "./Comments";
import CommentForm from "../containers/CommentForm";
import { ProfilePhoto, NameFirstLetter } from "../styles/postsStyles";

const Article = styled.article`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  border-radius: ${(props) => props.theme.borderRadius};
  border: 1px solid ${(props) => props.theme.borderColor};
  background-color: ${(props) => props.theme.backgroundSecondary};
`;

const Header = styled.header`
  padding: 16px;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
`;

const Username = styled.span`
  font-size: 0.8rem;
  color: ${(props) => props.theme.primary};
`;

const Photo = styled.img`
  max-width: 100%;
  object-fit: cover;
`;

const Time = styled.time`
  font-size: 0.6rem;
  text-transform: uppercase;
  padding: 0 16px;
  margin-bottom: 8px;
  color: ${(props) => props.theme.secondary};
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
`;

const Post = (props) => {
  const { post, me } = props;

  return (
    <Article>
      <Header>
        <StyledLink to={`/${post.user.username}`}>
          {post.user.profilePhotoURL ? (
            <ProfilePhoto src={post.user.profilePhotoURL} />
          ) : (
            <NameFirstLetter>{post.user.nameFirstLetter}</NameFirstLetter>
          )}
          <Username>{post.user.username}</Username>
        </StyledLink>
      </Header>
      <Photo src={post.photoURL} />
      <Footer>
        <Actions
          postId={post.id}
          liked={post.liked}
          bookmarked={post.bookmarked}
        />
        <Likes
          likesCount={post.likesCount}
          postId={post.id}
          createLike={props.createLike}
        />
        <Comments comments={post.comments} />
        <Time>{formatDistanceToNow(new Date(post.createdAt))} ago</Time>
        <CommentForm postId={post.id} me={me} />
      </Footer>
    </Article>
  );
};

export default Post;
