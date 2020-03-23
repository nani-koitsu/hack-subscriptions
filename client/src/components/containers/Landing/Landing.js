import React, { Component } from "react";
import "./Landing.css";
import SignUp from "../../SignUp/SignUp";
import Dashboard from "../Dashboard/Dashboard";
import { connect } from "react-redux";
class Landing extends Component {
  render() {
    return (
      <>
        {this.props.authUser.isAuthenticated ? (
          <Dashboard user={this.props.authUser.user} />
        ) : (
          <h1 className="class-landing-h1">
            Want to hack your Subscriptions?
            <br />
            Please sign up with your preferred account.
          </h1>
        )}
        <SignUp />
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    authUser: state.authUser
  };
};
export default connect(mapStateToProps, null)(Landing);
