import React, { Component } from "react";
import Dashboard from "../Dashboard/Dashboard";
import { connect } from "react-redux";
import "./Landing.css";
class Landing extends Component {
  render() {
    return (
      <>
        {this.props.authUser.isAuthenticated ? (
          <Dashboard user={this.props.authUser.user} />
        ) : (
          <h1 className="class-landing-h1">Want to hack your Subscriptions?</h1>
        )}
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
