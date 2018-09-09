import React from "react";
import styled from "styled-components";

import heart_default from "../images/heart_default.svg";
import heart_liked from "../images/heart_liked.svg";
import comment from "../images/comment.svg";
import bookmark_icon from "../images/bookmark.svg";
import bookmarked_icon from "../images/bookmarked.svg";

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
      <div>
        {liked ? (
          <Icon
            src={heart_liked}
            onClick={() => destroyLike(liked.likeId)}
            data-cy="unlike-btn"
          />
        ) : (
          <Icon
            src={heart_default}
            onClick={() => createLike(postId)}
            data-cy="like-btn"
          />
        )}
        <Icon src={comment} />
      </div>
      {bookmarked ? (
        <Icon
          src={bookmarked_icon}
          onClick={() => destroyBookmark(bookmarked.bookmarkId)}
          data-cy="unbookmark-btn"
        />
      ) : (
        <Icon
          src={bookmark_icon}
          onClick={() => createBookmark(postId)}
          data-cy="bookmark-btn"
        />
      )}
    </Section>
  );
};

export default Actions;
