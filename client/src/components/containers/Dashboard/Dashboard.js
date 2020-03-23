import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { userFillInInfo } from "../../../redux/action/authUserAction";
import "./Dashboard.css";
class Dashboard extends Component {
  state = {
    email: "",
    subs: []
  };
  render() {
    return (
      <>
        <h1>Dashboard</h1>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    authUser: state.authUser
  };
};
export default connect(mapStateToProps, { userFillInInfo })(
  withRouter(Dashboard)
);
