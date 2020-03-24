import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { userFillInInfo } from "../../../redux/action/authUserAction";
import SearchBar from "../../Searchbar/SearchBar";
import "./Dashboard.css";
import SubscriptionBox from "../../SubscriptionBox/SubscriptionBox";
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
      <div className="dashboard-container">
        <SearchBar />
        <SubscriptionBox />
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
