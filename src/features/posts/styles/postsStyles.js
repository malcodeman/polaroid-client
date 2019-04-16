import styled from "styled-components";

import { ReactComponent as heartIcon } from "../assets/icons/heart.svg";
import { ReactComponent as commentIcon } from "../assets/icons/comment.svg";
import { ReactComponent as shareIcon } from "../assets/icons/share.svg";
import { ReactComponent as bookmarkIcon } from "../assets/icons/bookmark.svg";

export const LikeIcon = styled(heartIcon)`
  cursor: pointer;
  fill: ${props => props.fill};
  stroke: ${props => props.stroke || props.theme.primary};
  width: ${props => props.width || "20px"};
  height: ${props => props.height || "20px"};
`;

export const CommentIcon = styled(commentIcon)`
  cursor: pointer;
  fill: ${props => props.fill};
  stroke: ${props => props.stroke || props.theme.primary};
  width: ${props => props.width || "20px"};
  height: ${props => props.height || "20px"};
`;

export const ShareIcon = styled(shareIcon)`
  cursor: pointer;
  fill: ${props => props.fill};
  stroke: ${props => props.stroke || props.theme.primary};
  width: ${props => props.width || "20px"};
  height: ${props => props.height || "20px"};
`;

export const BookmarkIcon = styled(bookmarkIcon)`
  cursor: pointer;
  fill: ${props => props.fill};
  stroke: ${props => props.stroke || props.theme.primary};
  width: ${props => props.width || "20px"};
  height: ${props => props.height || "20px"};
`;
