import React, { Component } from "react";
import styled from "styled-components";

import GoBack from "../components/GoBack";
import ThemesForm from "./forms/ThemesForm";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

class Themes extends Component {
  render() {
    return (
      <Wrapper>
        <GoBack />
        <span>Themes</span>
        <ThemesForm />
      </Wrapper>
    );
  }
}

export default Themes;
