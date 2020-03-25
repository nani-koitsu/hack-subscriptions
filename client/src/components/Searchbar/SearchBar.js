import React from "react";
import { connect } from "react-redux";
// import Backdrop from "../Backdrop/Backdrop";
import "./SearchBar.css";

class SearchBar extends React.Component {
  state = {
    searchSuggestions: []
  };
  componentDidMount() {
    console.log("<SearchBar /> :", this.props.authUser);
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
  handleClickedCompany = e => {
    const value = e.target.alt;

    console.log("you clicked me", value);
  };
  renderSearch() {
    const { searchSuggestions } = this.state;
    if (searchSuggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {searchSuggestions.map((item, index) => (
          <li key={index} onClick={this.handleClickedCompany}>
            <img src={require(`../../assets/img/${item}.png`)} alt={item}></img>
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
          type="text"
          placeholder="Subscription Name"
        />
        {this.renderSearch()}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    authUser: state.authUser
  };
};
export default connect(mapStateToProps, {})(SearchBar);
