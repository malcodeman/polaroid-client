import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
`;

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const Comment = styled.li`
  display: flex;
  font-size: 0.8rem;
  padding: 4px 0;
`;

const Username = styled(Link)`
  color: #262626;
  margin-right: 10px;
`;

const Body = styled.span`
  color: rgba(0, 0, 0, 0.8);
`;

const Comments = props => {
  const { comments } = props;
  const renderComments = () => {
    if (comments.length > 0) {
      return (
        <Section>
          <List>
            {comments.map(comment => (
              <Comment key={comment.id}>
                <Username to={`${comment.user.username}`}>
                  {comment.user.username}
                </Username>
                <Body>{comment.body}</Body>
              </Comment>
            ))}
          </List>
        </Section>
      );
    } else {
      return null;
    }
  };
  return renderComments();
};

export default Comments;
