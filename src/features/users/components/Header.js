import React from 'react';
import styled from 'styled-components';

import ProfilePhoto from '../containers/ProfilePhoto';

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
  const {
    profile,
    profilePhotoURL,
    nameFirstLetter,
    username,
    name,
    email,
    postsLength,
    bookmarksLength
  } = props;
  return (
    <Wrapper>
      <ProfilePhoto
        profile={profile}
        profilePhotoURL={profilePhotoURL}
        nameFirstLetter={nameFirstLetter}
      />
      <Text>
        <Typography>Username: {username}</Typography>
        <Typography>Name: {name}</Typography>
        {email ? <Typography>Email: {email}</Typography> : null}
        <Typography>{postsLength} posts </Typography>
        {profile ? <Typography>{bookmarksLength} bookmarks</Typography> : null}
      </Text>
    </Wrapper>
  );
};

export default Header;
