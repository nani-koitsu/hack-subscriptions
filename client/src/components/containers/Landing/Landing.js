import React, { Component } from "react";

import "./Landing.css";
import Signin from "../../Google/Signin";
import SubscriptionBox from "../../SubscriptionBox/SubscriptionBox";
import SignUp from "../../SignUp/SignUp";
import SignIn from "../../SignIn/SignIn";
class Landing extends Component {
  // componentDidMount() {
  //   if (this.props.authUser.isAuthenticated) {
  //     this.props.history.push("/auth-home");
  //   }
  // }
  render() {
    return (
      <>
        <h1 className="class-landing-h1">
          Want to hack your Subscriptions?
          <br />
          Please sign up with your preferred account.
        </h1>
        <SignUp />
        <SignIn />
        <div className="class-btn-google-sign-in">
          <Signin />
        </div>
        <SubscriptionBox />
      </>
    );
  }
}

export default Landing;
