import React, { Component } from "react";
import { Manager, Popper, Reference } from "react-popper";

import Toolbar from "../../toolbar/containers";
import DropdownContent from "./DropdownContent";

class DropdownMenu extends Component {
  state = {
    openMenu: false
  };
  handleToggleMenu = () => {
    this.setState(prevState => ({
      openMenu: !prevState.openMenu
    }));
  };
  render() {
    const { openMenu } = this.state;
    return (
      <Manager>
        <Reference>
          {({ ref }) => (
            <div ref={ref} onClick={this.handleToggleMenu}>
              <Toolbar />
            </div>
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
    );
  }
}

export default DropdownMenu;
