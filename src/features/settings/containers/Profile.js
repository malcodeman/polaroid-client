import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import NameForm from "../components/NameForm";

import { EditIcon } from "../styles/settingsStyles";
import EmailForm from "../components/EmailForm";

const StyledProfile = styled.div``;

const Title = styled.h2`
  font-size: 1rem;
  margin-bottom: 24px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const NameFirstLatter = styled.div`
  height: 64px;
  width: 64px;
  border-radius: 50%;
  cursor: pointer;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  text-transform: uppercase;
  :hover {
    box-shadow: 0 0 0 6px hsla(0, 0%, 0%, 0.06);
  }
  transition: 0.06s box-shadow ease-in;
  background-color: ${props => props.theme.brand};
`;

const ProfileImage = styled.div`
  height: 64px;
  width: 64px;
  border-radius: 50%;
  background-size: cover;
  cursor: pointer;
  :hover {
    box-shadow: 0 0 0 6px hsla(0, 0%, 0%, 0.06);
  }
  transition: 0.06s box-shadow ease-in;
  background-image: url(${props => props.bg});
`;

const Account = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 24px;
`;

const AccountItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const Name = styled.span`
  font-size: 0.8rem;
  margin-right: 24px;
`;

const Email = styled.span`
  font-size: 0.8rem;
  margin-right: 24px;
`;

const Password = styled.span`
  font-size: 0.8rem;
  color: ${props => props.theme.brand};
`;

const Edit = styled.span`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  cursor: pointer;
  color: ${props => props.theme.secondary};
`;

class Profile extends React.Component {
  state = {
    nameForm: false,
    emailForm: false
  };

  toggleNameForm = () => {
    this.setState(prevState => ({
      nameForm: !prevState.nameForm,
      emailForm: false
    }));
  };

  toggleEmailForm = () => {
    this.setState(prevState => ({
      emailForm: !prevState.emailForm,
      nameForm: false
    }));
  };

  render() {
    const { me } = this.props;
    const { nameForm, emailForm } = this.state;

    return (
      <StyledProfile>
        <Title>Profile overview</Title>
        <Wrapper>
          {me.profilePhotoURL ? (
            <ProfileImage bg={me.profilePhotoURL} />
          ) : (
            <NameFirstLatter>{me.nameFirstLetter}</NameFirstLatter>
          )}
          <Account>
            <AccountItem>
              <Name>{me.name}</Name>
              {!nameForm && (
                <Edit onClick={this.toggleNameForm}>
                  <EditIcon width="12px" height="12px" /> Edit name
                </Edit>
              )}
            </AccountItem>
            <AccountItem>
              <Email>{me.email}</Email>
              {!emailForm && (
                <Edit onClick={this.toggleEmailForm}>
                  <EditIcon width="12px" height="12px" /> Edit email
                </Edit>
              )}
            </AccountItem>
            <Password>Update password</Password>
          </Account>
        </Wrapper>
        {nameForm && <NameForm toggleNameForm={this.toggleNameForm} />}
        {emailForm && <EmailForm toggleEmailForm={this.toggleEmailForm} />}
      </StyledProfile>
    );
  }
}

const mapStateToProps = state => {
  return {
    me: state.users.me
  };
};

export default connect(
  mapStateToProps,
  null
)(Profile);
