import React from "react";
import { connect } from "react-redux";
import "./SearchBar.css";

class SearchBar extends React.Component {
  state = {
    searchSuggestions: []
  };
  componentDidMount() {
    console.log(this.props.authUser);
  }
  handleTextOnChange = e => {
    // console.log(this.props);
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

  renderSearch() {
    const { searchSuggestions } = this.state;
    if (searchSuggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {searchSuggestions.map((item, index) => (
          <li key={index}>{item}</li>
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
