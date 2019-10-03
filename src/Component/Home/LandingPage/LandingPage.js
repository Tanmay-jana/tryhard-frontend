/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
import "./LandingPage.css";
import axios from "axios";
import GooglePlayLogo from "../../../assets/google-play-badge.png";
import publicIp from 'public-ip';
import iplocation from 'iplocation'
// import DownloadButton from "../../../assets/Download button.png";
import downloadAndroid from '../../../assets/Download-for-Android.png'
import backgroundImg from "../../../assets/d5eaa24d8b1f0c1dc4b07f989c491a87fb92e78a.png";

export default class LandingPage extends Component {
  state = {
    countryName: "",
    ipAddress: "",
    indUrl: ""
  };

  // constructor(props) {
  //   super(props);
  //   (async () => {
  //     this.setState({ipAddress: await publicIp.v4()})
  //   })()
    
  // }

  componentDidMount = () => {
    
    window.scrollTo(0,0);

    publicIp.v4()
    .then((res) => {
      // console.log(res)
      iplocation(`${res}`)
    .then((res) => {
      // console.log(res.country)
      this.setState({countryName: res.country})
      sessionStorage.setItem("countryName", res.country)
    })
    .catch(err => {
      console.log(err);
    });
    })
    .catch((err) => {
      console.log("oh no! which country are you from?")
    })
    
    axios.get('https://api-in.tryhard.gg/cosmos/app')
    .then(res => {
      // console.log(res.data.response)
      sessionStorage.setItem("indUrl", res.data.response)
      this.setState({indUrl: res.data.response})
    })
    .catch(err => console.log(err))
    
  };

  render() {
    return (
      <div className="landing-page-container">
        <img className="background-img" src={backgroundImg} alt="background" />

        <div className="landing-body">
          <h1>Play DotA 2 or CSGO and win cash, even if you lose</h1>
          <h3>
            Tryhard brings to you a unique platform where you get rewarded for
            your performance in the game’s own competitive matchmaking
          </h3>
          <a  className = "google-play-links"
            target="_blank"
            href={
              sessionStorage.getItem("countryName") === "India"
                ? this.state.indUrl
                : "http://api-eu.tryhard.gg/"
            }
          >
            <img
              className={sessionStorage.getItem("countryName") !== "India"? "google-play-logo": "invisible"}
              src={GooglePlayLogo}
              alt="Google_play_logo"
            />
            {/* <button className = {sessionStorage.getItem("countryName") === "India"? "portal-button": "invisible-button"}>Download for Android</button> */}
            <img className={sessionStorage.getItem("countryName") === "India"? "google-play-logo": "invisible"} src = {downloadAndroid} alt = "download_for_android"/>
          </a>
        </div>
      </div>
    );
  }
}
