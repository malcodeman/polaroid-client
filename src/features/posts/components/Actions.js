import React from "react";
import styled from "styled-components";

import {
  LikeIcon,
  CommentIcon,
  ShareIcon,
  BookmarkIcon
} from "../styles/postsStyles";

const Section = styled.section`
  padding: 0 16px;
  margin: 8px 0;
  display: flex;
  svg:not(:last-child) {
    margin-right: 8px;
  }
  svg:last-child {
    margin-left: auto;
  }
`;

const Actions = props => {
  const {
    postId,
    liked,
    bookmarked,
    createLike,
    destroyLike,
    createBookmark,
    destroyBookmark
  } = props;

  return (
    <Section>
      {liked ? (
        <LikeIcon
          onClick={() => destroyLike(postId)}
          fill="#ed4956"
          stroke="#ed4956"
          data-cy="unlike-btn"
        />
      ) : (
        <LikeIcon onClick={() => createLike(postId)} data-cy="like-btn" />
      )}
      <CommentIcon />
      <ShareIcon />
      {bookmarked ? (
        <BookmarkIcon
          onClick={() => destroyBookmark(postId)}
          fill="#262626"
          stroke="#262626"
          data-cy="unbookmark-btn"
        />
      ) : (
        <BookmarkIcon
          onClick={() => createBookmark(postId)}
          data-cy="bookmark-btn"
        />
      )}
    </Section>
  );
};

export default Actions;
