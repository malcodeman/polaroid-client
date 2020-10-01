import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { findSuggestions } from "../../users/actions/usersActionCreators";

const Wrapper = styled.div`
  padding: 16px;
  margin-bottom: 24px;
  background-color: ${(props) => props.theme.backgroundSecondary};
  border-radius: ${(props) => props.theme.borderRadius};
  border: 1px solid ${(props) => props.theme.borderColor};
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const Title = styled.h2`
  font-size: 0.8rem;
  font-weight: normal;
  color: ${(props) => props.theme.secondary};
`;

const StyledLink = styled(Link)`
  font-size: 0.8rem;
  color: ${(props) => props.theme.primary};
`;

const StyledUser = styled.div`
  display: flex;
  align-items: center;
  :not(:last-child) {
    margin-bottom: 16px;
  }
`;

const NameFirstLatter = styled.div`
  height: 34px;
  width: 34px;
  border-radius: 50%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  text-transform: uppercase;
  margin-right: 10px;
  background-color: ${(props) => props.theme.brand};
`;

const ProfileImage = styled.div`
  height: 34px;
  width: 34px;
  border-radius: 50%;
  background-size: cover;
  margin-right: 10px;
  background-image: url(${(props) => props.bg});
`;

const Username = styled.span`
  font-size: 0.8rem;
  color: ${(props) => props.theme.primary};
`;

const Follow = styled.button`
  font-size: 0.8rem;
  border: 0;
  padding: 0;
  cursor: pointer;
  background-color: transparent;
  margin-left: auto;
  color: ${(props) => props.theme.brand};
`;

function User(props) {
  return (
    <StyledUser>
      {props.profilePhotoURL ? (
        <ProfileImage bg={props.profilePhotoURL} />
      ) : (
        <NameFirstLatter>{props.nameFirstLetter}</NameFirstLatter>
      )}
      <Username>{props.username}</Username>
      <Follow>Follow</Follow>
    </StyledUser>
  );
}

function Suggestions(props) {
  useEffect(() => {
    if (props.followSuggestions.length === 0) {
      props.findSuggestions();
    }
  }, [props]);

  return (
    <Wrapper>
      <Header>
        <Title>Suggestions For You</Title>
        <StyledLink to="/explore/people">See All</StyledLink>
      </Header>
      {props.followSuggestions.map((user) => {
        return (
          <User
            key={user.username}
            username={user.username}
            nameFirstLetter={user.nameFirstLetter}
            profilePhotoURL={user.profilePhotoURL}
          />
        );
      })}
    </Wrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    followSuggestions: state.users.followSuggestions,
  };
};

export default connect(mapStateToProps, { findSuggestions })(Suggestions);
