import React, { Component } from "react";
import "./LandingPage.css";
import GooglePlayLogo from "../../../assets/google-play-badge.png";
import TryHardLogo from "../../../assets/429e9bf8b8a94aa87be06f9a038c4d1f014a0941.png";
import DownloadButton from '../../../assets/Download button.png';

export default class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page-container">
        <header>
          <div className="logo-container">
            <img
              className="tryhard-logo"
              src={TryHardLogo}
              alt="tryhard-logo"
            />
            <p>Tryhard GG</p>
          </div>
          <div className = "nav-container">
            <p>Features</p>
            <p>About</p>
            <img src = {DownloadButton} alt = "dowmload-button"/>
            <button className = "login-button">LOG IN</button>
          </div>
        </header>
        <div className="landing-body">
          <h1>Welcome to the worlds first Esports rewards platform</h1>
          <img
            className="google-play-logo"
            src={GooglePlayLogo}
            alt="Google_play_logo"
          />
        </div>
      </div>
    );
  }
}
