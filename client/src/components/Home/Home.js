import React, { Component } from "react";

import "./Home.css";
import Signin from "../Google/Signin";
class Home extends Component {
  // componentDidMount() {
  //   if (this.props.authUser.isAuthenticated) {
  //     this.props.history.push("/auth-home");
  //   }
  // }
  render() {
    return (
      <>
        <h1 className="class-home-h1">
          Want to hack your Subscriptions?
          <br />
          Please sign up with your preferred account.
        </h1>

        <div className="class-btn-google-sign-in">
          <Signin />
        </div>
      </>
    );
  }
}

export default Home;
