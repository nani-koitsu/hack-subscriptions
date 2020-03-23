import React, { Component } from "react";

import "./Toolbar.css";
// import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import { logout } from "../../redux/action/authUserAction";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";

class Toolbar extends Component {
  render() {
    let navigation;

    if (this.props.authUser.isAuthenticated) {
      console.log(this.props.authUser.user);
      navigation = (
        <>
          <h1>LOGGEDIN</h1>
        </>
      );
    }
    return (
      <header className="toolbar">
        <nav className="toolbar-navigation">
          <div className="toolbar-toggle-button">
            {/* <DrawerToggleButton click={props.drawerClickHandler} /> */}
          </div>
          <div className="toolbar-logo">
            <a href="/">HACK SUBSCRIPTIONS</a>
          </div>
          <div className="spacer"></div>
          <div className="toolbar-navigation-items">
            <ul>
              <li>
                <NavLink
                  to="/signup"
                  activeStyle={{
                    fontWeight: "bold",
                    textDecorationLine: "underline",
                    color: "orange"
                  }}
                >
                  Sign Up
                </NavLink>
              </li>
              <NavLink
                to="/signin"
                activeStyle={{
                  fontWeight: "bold",
                  textDecorationLine: "underline",
                  color: "orange"
                }}
              >
                Sign In
              </NavLink>
              <li>
                <a href="/">Boring Stuff</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    authUser: state.authUser
  };
};

export default connect(mapStateToProps, { logout })(withRouter(Toolbar));
