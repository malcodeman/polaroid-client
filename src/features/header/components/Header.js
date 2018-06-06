import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Toolbar from "../../toolbar/containers";

const Wrapper = styled.div`
  flex-basis: 64px;
`;

const StyledHeader = styled.header`
  top: 0;
  position: fixed;
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 992px;
  margin: 0 auto;
  width: 100%;
  height: 64px;
  padding: 0 20px;
`;

const Header = props => {
  return (
    <Wrapper>
      <StyledHeader>
        <Nav>
          <Link to="/">Confessio</Link>
          <div>
            {props.children}
            <Toolbar />
          </div>
        </Nav>
      </StyledHeader>
    </Wrapper>
  );
};

export default Header;
