import React, { Component } from "react";
import "./Winning.css";
import mobile from "../../../assets/mobile.png";

export default class Winning extends Component {
  render() {
    return (
      <div className="winning-container">
        <div className="wining-text-container">
          <h1>Start Winning, Start Earning.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua\
          </p>
        </div>
        <div className = "winning-img-container">
            <img className = "mobile-img" src = {mobile} alt = "mobile"/>
            <div className = "download-button-container">
                <p>Now available on Android</p>
                <button>DOWNLOAD</button>
            </div>
        </div>
      </div>
    );
  }
}
