import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import Switch from "../../commonComponents/Switch";
import { toggleDarkMode } from "../actions/settingsActionCreators";

const Wrapper = styled.div`
  margin-bottom: 24px;
`;

const Title = styled.h2`
  font-size: 0.8rem;
  margin-bottom: 24px;
  color: ${(props) => props.theme.primary};
`;

const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  font-size: 0.8rem;
  margin-left: 24px;
  color: ${(props) => props.theme.secondary};
`;

const ThemeForm = (props) => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.settings.darkMode);

  return (
    <Wrapper>
      <Title>Theme</Title>
      <SwitchWrapper>
        <Switch
          state={darkMode}
          toggleState={() => dispatch(toggleDarkMode(!darkMode))}
        />
        <Label>Dark mode</Label>
      </SwitchWrapper>
    </Wrapper>
  );
};

export default ThemeForm;
