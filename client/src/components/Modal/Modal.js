import React from "react";

const modal = props => (
  <div>
    <h1>{this.props.item}</h1>
    <input type="text" placeholder="Amount Due"></input>
    <input type="text" placeholder="Payment Due"></input>
    <input type="text" placeholder="Bill Cycle"></input>
    <button>Submit</button>
    <button>Cancel</button>
  </div>
);

export default modal;
