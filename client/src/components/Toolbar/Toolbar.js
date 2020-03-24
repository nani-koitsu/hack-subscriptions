import React, { Component } from "react";

import "./Toolbar.css";
// import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import { logout } from "../../redux/action/authUserAction";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";

class Toolbar extends Component {
  render() {
    let navigation = null;

    if (this.props.authUser.isAuthenticated) {
      console.log(this.props.authUser.user);
      navigation = (
        <>
          <NavLink
            to="/logout"
            activeStyle={{
              fontWeigh: "bold",
              color: "orange",
              textDecorationLine: "underline"
            }}
            onClick={this.props.logout}
          >
            {this.props.authUser.user.email}
            <br />
            Logout
          </NavLink>
        </>
      );
    } else {
      navigation = (
        <>
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
          <br />
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
        </>
      );
    }
    return (
      <header className="toolbar">
        <nav className="toolbar-navigation">
          <div className="toolbar-logo">
            <a href="/">HACK SUBSCRIPTIONS</a>
          </div>
          <div className="spacer"></div>
          <div className="toolbar-navigation-items">{navigation}</div>
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
