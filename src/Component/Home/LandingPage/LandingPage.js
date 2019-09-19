/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
import "./LandingPage.css";
import axios from "axios";
import GooglePlayLogo from "../../../assets/google-play-badge.png";

// import DownloadButton from "../../../assets/Download button.png";
import backgroundImg from "../../../assets/d5eaa24d8b1f0c1dc4b07f989c491a87fb92e78a.png";

export default class LandingPage extends Component {
  state = {
    stateName: ""
  };

  componentDidMount = () => {
    window.scrollTo(0,0);
    axios
      .get("https://api.ipdata.co/?api-key=test")
      .then(res => {
        // console.log(res.data.country_name)
        this.setState({ stateName: res.data.country_name });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="landing-page-container">
        <img className="background-img" src={backgroundImg} alt="background" />

        <div className="landing-body">
          <h1>Tired of playing well and still losing?</h1>
          <h3>
            Tryhard brings to you a unique platform where you get rewarded for
            your performance in the game’s own competitive matchmaking
          </h3>
          <a
            target="_blank"
            href={
              this.state.stateName === "India"
                ? "https://www.youtube.com"
                : "https://google.com"
            }
          >
            <img
              className="google-play-logo"
              src={GooglePlayLogo}
              alt="Google_play_logo"
            />
            {/* <button className = "portal-button">GO TO OUT PORTAL</button> */}
          </a>
        </div>
      </div>
    );
  }
}
