import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { changeTheme } from "../../../users/actions/index";

const ThemesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 128px;
  grid-gap: 20px;
`;

const Theme = styled.div`
  border-radius: ${props => props.theme.borderRadius};
  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};
  font-size: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-transform: uppercase;
`;

class ThemesForm extends Component {
  render() {
    const { changeTheme, theme } = this.props;
    const themes = [
      {
        name: "light",
        backgroundColor: "#fff",
        color: "#ccc"
      },
      {
        name: "dark",
        backgroundColor: "#000",
        color: "#fff"
      }
    ];
    return (
      <ThemesGrid>
        {themes.map(theme => (
          <Theme
            key={theme.name}
            backgroundColor={theme.backgroundColor}
            color={theme.color}
            onClick={() => changeTheme(theme.name)}
          >
            {theme.name}
          </Theme>
        ))}
      </ThemesGrid>
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
  { changeTheme }
)(ThemesForm);
