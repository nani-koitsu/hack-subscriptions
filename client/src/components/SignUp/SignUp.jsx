import React, { Component } from "react";
import { withRouter } from "react-router-dom";
class SignUp extends Component {
  componentDidMount() {
    console.log("hello from Sign Up");
  }
  render() {
    return (
      <>
        <h1>Hello Sign Up</h1>
      </>
    );
  }
}

export default withRouter(SignUp);
