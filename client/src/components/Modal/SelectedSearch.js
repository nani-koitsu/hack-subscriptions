import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSearchResult } from "../../redux/action/authUserModalAction";

class SelectedSearch extends Component {
  componentDidMount() {
    console.log("SELECTED SEARCH::", this.props.modal);
  }
  handleClickedItem = event => {
    let subscription = event.target.alt;
    this.props.selectSearchResult(subscription);
    this.props.closeModal();
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClickedItem}>IS THIS IT?</button>
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

export default connect(mapStateToProps, {})(SelectedSearch);
