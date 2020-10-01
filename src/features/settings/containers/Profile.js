import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Modal } from "@malcodeman/react-modal";

import { EditIcon } from "../styles/settingsStyles";
import EmailForm from "../components/EmailForm";
import PasswordForm from "../components/PasswordForm";
import ProfilePhotoModal from "../components/ProfilePhotoModal";
import ThemeForm from "../components/ThemeForm";
import NameForm from "../components/NameForm";

const MODAL_ROOT = document.getElementById("modal-root");

const StyledProfile = styled.div`
  padding: 16px;
  border-radius: ${(props) => props.theme.borderRadius};
  border: 1px solid ${(props) => props.theme.borderColor};
  background-color: ${(props) => props.theme.backgroundSecondary};
`;

const Title = styled.h1`
  font-size: 1rem;
  margin-bottom: 24px;
  color: ${(props) => props.theme.primary};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 576px) {
    flex-direction: row;
    align-items: center;
    margin-bottom: 24px;
  }
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
  align-self: center;
  margin-bottom: 24px;
  :hover {
    box-shadow: 0 0 0 6px hsla(0, 0%, 0%, 0.06);
  }
  @media (min-width: 576px) {
    align-self: initial;
    margin-bottom: 0;
  }
  transition: 0.06s box-shadow ease-in;
  background-color: ${(props) => props.theme.brand};
`;

const ProfileImage = styled.div`
  height: 64px;
  width: 64px;
  border-radius: 50%;
  background-size: cover;
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  transition: 0.06s box-shadow ease-in;
  align-self: center;
  margin-bottom: 24px;
  :hover {
    box-shadow: 0 0 0 6px hsla(0, 0%, 0%, 0.06);
  }
  @media (min-width: 576px) {
    align-self: initial;
    margin-bottom: 0;
  }
  background-image: url(${(props) => props.bg});
`;

const EditIconWrapper = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.secondary};
  background-color: ${(props) => props.theme.backgroundPrimary};
`;

const Account = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  @media (min-width: 576px) {
    margin: 0 24px;
  }
`;

const AccountItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const Name = styled.span`
  font-size: 0.8rem;
  color: ${(props) => props.theme.primary};
`;

const Email = styled.span`
  font-size: 0.8rem;
  color: ${(props) => props.theme.primary};
`;

const Password = styled.span`
  font-size: 0.8rem;
  cursor: pointer;
  color: ${(props) => props.theme.brand};
`;

const Edit = styled.span`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  cursor: pointer;
  margin-left: auto;
  @media (min-width: 576px) {
    margin-left: 24px;
  }
  color: ${(props) => props.theme.secondary};
`;

class Profile extends React.Component {
  state = {
    nameForm: false,
    emailForm: false,
    passwordForm: false,
    profilePhotoForm: false,
  };

  componentDidMount = () => {
    document.addEventListener("keydown", this.handleEscape);
  };

  componentWillUnmount = () => {
    document.removeEventListener("keydown", this.handleEscape);
  };

  handleEscape = (event) => {
    if (event.keyCode === 27) {
      this.setState({ profilePhotoForm: false });
    }
  };

  toggleNameForm = () => {
    this.setState((prevState) => ({
      nameForm: !prevState.nameForm,
      emailForm: false,
      passwordForm: false,
    }));
  };

  toggleEmailForm = () => {
    this.setState((prevState) => ({
      nameForm: false,
      emailForm: !prevState.emailForm,
      passwordForm: false,
    }));
  };

  togglePasswordForm = () => {
    this.setState((prevState) => ({
      nameForm: false,
      emailForm: false,
      passwordForm: !prevState.passwordForm,
    }));
  };

  toggleProfilePhotoForm = () => {
    this.setState((prevState) => ({
      profilePhotoForm: !prevState.profilePhotoForm,
    }));
  };

  closeProfilePhotoForm = () => {
    this.setState(() => ({
      profilePhotoForm: false,
    }));
  };

  render() {
    const { me } = this.props;
    const { nameForm, emailForm, passwordForm, profilePhotoForm } = this.state;

    return (
      <StyledProfile>
        <Title>Profile overview</Title>
        <Wrapper>
          {me.profilePhotoURL ? (
            <ProfileImage
              bg={me.profilePhotoURL}
              onClick={this.toggleProfilePhotoForm}
            >
              <EditIconWrapper>
                <EditIcon width="12px" height="12px" />
              </EditIconWrapper>
            </ProfileImage>
          ) : (
            <NameFirstLatter onClick={this.toggleProfilePhotoForm}>
              {me.nameFirstLetter}
            </NameFirstLatter>
          )}
          <Account>
            <AccountItem>
              <Name>{me.name}</Name>
              {!nameForm && (
                <Edit onClick={this.toggleNameForm}>
                  <EditIcon width="12px" height="12px" margin="0 4px 0 0" />
                  Edit name
                </Edit>
              )}
            </AccountItem>
            <AccountItem>
              <Email>{me.email}</Email>
              {!emailForm && (
                <Edit onClick={this.toggleEmailForm}>
                  <EditIcon width="12px" height="12px" margin="0 4px 0 0" />
                  Edit email
                </Edit>
              )}
            </AccountItem>
            <Password onClick={this.togglePasswordForm}>
              Update password
            </Password>
          </Account>
        </Wrapper>
        {nameForm && <NameForm toggleNameForm={this.toggleNameForm} />}
        {emailForm && <EmailForm toggleEmailForm={this.toggleEmailForm} />}
        {passwordForm && (
          <PasswordForm togglePasswordForm={this.togglePasswordForm} />
        )}
        <ThemeForm />
        <Modal
          mountNode={MODAL_ROOT}
          isOpen={profilePhotoForm}
          onClose={this.closeProfilePhotoForm}
        >
          <div>
            <ProfilePhotoModal
              toggleProfilePhotoForm={this.toggleProfilePhotoForm}
            />
          </div>
        </Modal>
      </StyledProfile>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    me: state.users.me,
  };
};

export default connect(mapStateToProps, null)(Profile);
