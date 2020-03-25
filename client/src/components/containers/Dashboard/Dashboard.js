import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
  showModal,
  hideModal
} from "../../../redux/action/authUserModalAction";
import SearchBar from "../../Searchbar/SearchBar";
import "./Dashboard.css";
import SubscriptionBox from "../../SubscriptionBox/SubscriptionBox";
import ModalContainer from "../../Modal/ModalContainer";

class Dashboard extends Component {
  state = {
    email: "",
    subs: []
  };
  componentDidMount() {
    if (!this.props.authUser.isAuthenticated) {
      this.props.history.push("/signin");
    }
    console.log(`dashboard : `, this.props.authUser);
  }
  openSelectedSubscription = () => {
    this.props.showModal({
      open: true,
      selectedModal: `Selected Search`
    });
  };
  render() {
    return (
      <div className="dashboard-container">
        {this.props.authUser.isAuthenticated ? (
          <>
            <li onClick={this.openSelectedSubscription}>Hero Actions</li>

            <ModalContainer hideModal={this.props.hideModal} />
          </>
        ) : (
          <Redirect to="/signin" />
        )}
        <SearchBar />
        <SubscriptionBox />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    authUser: state.authUser,
    modal: state.modal
  };
};
export default connect(mapStateToProps, { showModal, hideModal })(
  withRouter(Dashboard)
);
