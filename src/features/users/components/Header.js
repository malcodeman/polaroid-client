import React from "react";
import styled from "styled-components";

import ProfilePhoto from "../containers/ProfilePhoto";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 10px;
  margin-bottom: 20px;
`;

const Text = styled.span`
  display: flex;
  flex-direction: column;
`;

const Typography = styled.span`
  font-size: 0.8rem;
  margin: 4px 0;
`;

const Header = props => {
  return (
    <Wrapper>
      <ProfilePhoto
        profile={props.profile}
        profilePhotoURL={props.profilePhotoURL}
        nameFirstLetter={props.nameFirstLetter}
      />
      <Text>
        <Typography>Username: {props.username}</Typography>
        <Typography>Name: {props.name}</Typography>
        {props.email ? <Typography>Email: {props.email}</Typography> : null}
        <Typography>{props.postsLength} posts</Typography>
      </Text>
    </Wrapper>
  );
};

export default Header;
