import React from "react";
import { connect } from "react-redux";
import {
  showModal,
  hideModal,
  selectSearchResult
} from "../../redux/action/authUserModalAction";

import "./SearchBar.css";

class SearchBar extends React.Component {
  state = {
    searchSuggestions: [],
    isSelected: false,
    selected: ""
  };

  componentDidMount() {
    if (!this.props.authUser.isAuthenticated) {
      this.props.history.push("/signin");
    }
  }

  handleTextOnChange = e => {
    const value = e.target.value;
    let searchSuggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      searchSuggestions = this.props.authUser.subscriptionsList
        .sort()
        .filter(item => regex.test(item));
    }
    this.setState({ searchSuggestions, text: value });
  };

  handleOnClick = e => {
    const value = e.target.alt;

    this.setState({
      isSelected: true,
      selected: value
    });

    this.props.showModal({
      open: true,
      selectedModal: "Selected Search"
    });

    console.log(this.state);
  };

  openModal = () => {
    this.props.showModal({
      open: true,
      selectedModal: "Selected Search"
    });
  };

  renderSearch() {
    const { searchSuggestions } = this.state;
    if (searchSuggestions.length === 0) {
      return null;
    }
    return (
      <ul className="sub-list">
        {searchSuggestions.map((item, index) => (
          <li className="sub-item" key={index} onClick={this.handleOnClick}>
            <img
              className="search-image"
              src={require(`../../assets/img/${item}.png`)}
              alt={item}
            ></img>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="search-container">
        <input
          onChange={this.handleTextOnChange}
          placeholder="Subscription Name"
          type="text"
          className="input-field"
        />
        <div>{this.renderSearch()}</div>
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
export default connect(mapStateToProps, {
  showModal,
  hideModal,
  selectSearchResult
})(SearchBar);
