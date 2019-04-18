import React from "react";
import styled from "styled-components";

import ProfilePhotoURLForm from "../components/ProfilePhotoURLForm";
import { XIcon } from "../styles/settingsStyles";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  width: 100vw;
  height: 100vh;
  @media (min-width: 768px) {
    width: 50vw;
    height: 50vh;
  }
  transition: all 0.3s cubic-bezier(0.84, 0.02, 0.37, 0.74);
`;

const SideNav = styled.nav`
  display: flex;
  flex-direction: column;
  background-color: #eee;
`;

const SideNavItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 0.8rem;
  color: ${props => props.theme.primary};
`;

const Main = styled.main`
  display: grid;
  grid-template-rows: auto 1fr;
  padding: 10px;
  background-color: #fff;
`;

const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 1rem;
  font-weight: normal;
  margin-left: auto;
`;

class ProfilePhotoForm extends React.Component {
  state = {
    uploadForm: false,
    urlForm: false
  };

  render() {
    const { toggleProfilePhotoForm } = this.props;

    return (
      <Wrapper>
        <SideNav>
          <SideNavItem>Link (URL)</SideNavItem>
          <SideNavItem>My Device</SideNavItem>
        </SideNav>
        <Main>
          <Header>
            <Title>Link (URL)</Title>
            <XIcon onClick={toggleProfilePhotoForm} />
          </Header>
          <FormWrapper>
            <ProfilePhotoURLForm
              toggleProfilePhotoForm={toggleProfilePhotoForm}
            />
          </FormWrapper>
        </Main>
      </Wrapper>
    );
  }
}

export default ProfilePhotoForm;
