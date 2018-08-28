import React, { Component } from "react";
import { Manager, Popper, Reference } from "react-popper";
import OutsideClickHandler from "react-outside-click-handler";
import styled from "styled-components";

import Toolbar from "../../toolbar/containers";
import DropdownContent from "./DropdownContent";

const ReferenceWrapper = styled.div`
  height: 36px;
  display: flex;
  align-items: center;
`;

class DropdownMenu extends Component {
  state = {
    openMenu: false
  };
  handleToggleMenu = () => {
    this.setState(prevState => ({
      openMenu: !prevState.openMenu
    }));
  };
  handleCloseMenu = () => {
    this.setState({ openMenu: false });
  };
  render() {
    const { openMenu } = this.state;
    return (
      <OutsideClickHandler onOutsideClick={this.handleCloseMenu}>
        <Manager>
          <Reference>
            {({ ref }) => (
              <ReferenceWrapper innerRef={ref} onClick={this.handleToggleMenu}>
                <Toolbar />
              </ReferenceWrapper>
            )}
          </Reference>
          {openMenu ? (
            <Popper placement="bottom">
              {({ ref, style, placement }) => (
                <div ref={ref} style={style} data-placement={placement}>
                  <DropdownContent handleToggleMenu={this.handleToggleMenu} />
                </div>
              )}
            </Popper>
          ) : null}
        </Manager>
      </OutsideClickHandler>
    );
  }
}

export default DropdownMenu;
