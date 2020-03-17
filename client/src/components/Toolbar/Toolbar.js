import React from "react";
import "./Toolbar.css";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar-navigation">
      <div className="toolbar-toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar-logo">
        <a href="/">HACK SUBSRIPTIONS</a>
      </div>
      <div className="spacer"></div>
      <div className="toolbar-navigation-items">
        <ul>
          <li>
            <a href="/">User Subsriptions</a>
          </li>
          <li>
            <a href="/">Boring Stuff</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);
export default toolbar;
