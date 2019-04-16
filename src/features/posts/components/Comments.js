import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  margin-bottom: 8px;
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
  margin-right: 10px;
  font-size: 0.8rem;
  font-weight: 600;
  color: ${props => props.theme.primary};
`;

const Body = styled.span`
  word-wrap: anywhere;
  color: ${props => props.theme.primary};
`;

const Comments = props => {
  const { comments } = props;

  function renderComments() {
    if (comments.length > 0) {
      return (
        <Section>
          <List>
            {comments.map(comment => (
              <Comment key={comment.id}>
                <Username to={`/${comment.user.username}`}>
                  {comment.user.username}
                </Username>
                <Body>{comment.body}</Body>
              </Comment>
            ))}
          </List>
        </Section>
      );
    }
    return null;
  }
  return renderComments();
};

export default Comments;
