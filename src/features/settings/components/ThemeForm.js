import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Switch from "../../commonComponents/Switch";
import { toggleDarkMode } from "../actions/settingsActionCreators";

const Wrapper = styled.div`
  margin-bottom: 24px;
`;

const Title = styled.h2`
  font-size: 0.8rem;
  margin-bottom: 24px;
  color: ${props => props.theme.primary};
`;

const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  font-size: 0.8rem;
  margin-left: 24px;
  color: ${props => props.theme.secondary};
`;

const ThemeForm = props => {
  const { darkMode, toggleDarkMode } = props;

  function toggleState() {
    const state = darkMode ? false : true;

    toggleDarkMode(state);
  }

  return (
    <Wrapper>
      <Title>Theme</Title>
      <SwitchWrapper>
        <Switch state={darkMode} toggleState={toggleState} />
        <Label>Dark mode</Label>
      </SwitchWrapper>
    </Wrapper>
  );
};

const mapStateToProps = state => {
  return {
    darkMode: state.settings.darkMode
  };
};

export default connect(
  mapStateToProps,
  { toggleDarkMode }
)(ThemeForm);
