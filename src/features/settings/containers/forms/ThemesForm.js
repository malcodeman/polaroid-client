import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { changeTheme } from "../../../users/actions/index";

class ThemesForm extends Component {
  render() {
    const { changeTheme } = this.props;
    return (
      <div>
        <span onClick={() => changeTheme("light")}>Change</span>
      </div>
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
