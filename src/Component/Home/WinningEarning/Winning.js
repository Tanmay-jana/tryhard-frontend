import React, { Component } from "react";
import "./Winning.css";
import mobile from "../../../assets/mobile.png";

export default class Winning extends Component {
  render() {
    return (
      <div className="winning-container">
        <div className="wining-text-container">
          <h1>Think Gaming, Think Tryhard.</h1>
          <p>
            Download the app and get 400 Coins on signup. Use code “NEW USER”
            and get 50% off on your first 3 leagues. Try out for free!
          </p>
        </div>
        <div className="winning-img-container">
          <img className="mobile-img" src={mobile} alt="mobile" />
          <div className="download-button-container">
            <p>Now available on Android</p>
            <button className="download-button">DOWNLOAD</button>
          </div>
        </div>
      </div>
    );
  }
}
