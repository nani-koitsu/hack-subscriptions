import React from "react";
import NetflixLogo from "../../SubscriptionLogos/netflix_logo.png";
import "./Subscriptions.css";

const trackedSubscription = props => (
  <>
    <div className="subscription-container">
      <div className="subscription-row">
        <div className="image-container">
          <img src={NetflixLogo} alt="NetflixLogo"></img>
        </div>
        <div className="spacer"></div>
        <div className="subscription-row-items">
          <ul>
            <li>Netflix</li>
            <li>Monthly</li>
            <li>Renews on Mar 25 2020</li>
          </ul>
        </div>
        <button>Edit</button>
        <button>Actions</button>
      </div>
    </div>
  </>
);

export default trackedSubscription;
