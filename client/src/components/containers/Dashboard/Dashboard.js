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
  componentDidMount() {
    console.log(this.props.authUser);
  }
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
      </div>
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
