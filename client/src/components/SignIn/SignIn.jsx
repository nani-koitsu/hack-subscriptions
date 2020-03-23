import React, { Component } from "react";
import { connect } from "react-redux";
import { signin } from "../../redux/action/authUserAction";

class Signin extends Component {
  componentDidMount() {
    console.log("hello from Sign IN");
  }
  render() {
    return (
      <>
        <h1>Hello Sign IN</h1>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    authUser: state.authUser
  };
};
export default connect(mapStateToProps, { signin })(Signin);
