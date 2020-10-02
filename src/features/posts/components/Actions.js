import React from "react";
import styled, { useTheme } from "styled-components";
import { useDispatch } from "react-redux";

import {
  LikeIcon,
  CommentIcon,
  ShareIcon,
  BookmarkIcon,
} from "../styles/postsStyles";
import {
  createLike,
  destroyLike,
  createBookmark,
  destroyBookmark,
} from "../actions/postsActionCreators";

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

const Actions = (props) => {
  const { postId, liked, bookmarked } = props;
  const dispatch = useDispatch();
  const theme = useTheme();

  return (
    <Section>
      {liked ? (
        <LikeIcon
          onClick={() => dispatch(destroyLike(postId))}
          fill="#ed4956"
          stroke="#ed4956"
          data-cy="unlike-btn"
        />
      ) : (
        <LikeIcon
          onClick={() => dispatch(createLike(postId))}
          data-cy="like-btn"
        />
      )}
      <CommentIcon />
      <ShareIcon />
      {bookmarked ? (
        <BookmarkIcon
          onClick={() => dispatch(destroyBookmark(postId))}
          fill={theme.primary}
          stroke={theme.primary}
          data-cy="unbookmark-btn"
        />
      ) : (
        <BookmarkIcon
          onClick={() => dispatch(createBookmark(postId))}
          data-cy="bookmark-btn"
        />
      )}
    </Section>
  );
};

export default Actions;
