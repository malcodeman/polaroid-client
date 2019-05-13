import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 10px;
  margin-bottom: 20px;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NameFirstLatter = styled.div`
  height: 64px;
  width: 64px;
  border-radius: 50%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  text-transform: uppercase;
  background-color: ${props => props.theme.brand};
`;

const ProfileImage = styled.div`
  height: 64px;
  width: 64px;
  border-radius: 50%;
  background-size: cover;
  background-image: url(${props => props.bg});
`;

const Overview = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.span`
  font-size: 0.8rem;
  margin: 4px 0;
  color: ${props => props.theme.primary};
`;

const Header = props => {
  const {
    profilePhotoURL,
    nameFirstLetter,
    username,
    name,
    email,
    postsLength,
    bookmarksLength
  } = props;

  function renderPosts(postsLength) {
    if (postsLength === 1) {
      return <Text>{postsLength} post</Text>;
    }
    return <Text>{postsLength} posts</Text>;
  }

  function renderBookmarks(bookmarksLength) {
    if (bookmarksLength === 1) {
      return <Text>{bookmarksLength} bookmark</Text>;
    }
    return <Text>{bookmarksLength} bookmarks</Text>;
  }

  return (
    <Wrapper>
      <Profile>
        {profilePhotoURL ? (
          <ProfileImage bg={profilePhotoURL} />
        ) : (
          <NameFirstLatter>{nameFirstLetter}</NameFirstLatter>
        )}
      </Profile>
      <Overview>
        <Text>Username: {username}</Text>
        <Text>Name: {name}</Text>
        {email && <Text>Email: {email}</Text>}
        {renderPosts(postsLength)}
        {email && renderBookmarks(bookmarksLength)}
      </Overview>
    </Wrapper>
  );
};

export default Header;
