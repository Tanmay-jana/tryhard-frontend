/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
import "./LandingPage.css";
import axios from 'axios';
import GooglePlayLogo from "../../../assets/google-play-badge.png";
import TryHardLogo from "../../../assets/429e9bf8b8a94aa87be06f9a038c4d1f014a0941.png";
import DownloadButton from '../../../assets/Download button.png';
import backgroundImg from '../../../assets/d5eaa24d8b1f0c1dc4b07f989c491a87fb92e78a.png';
import sideMenu from '../../../assets/menu-icon-1@2x.png';

export default class LandingPage extends Component {

  state = {
    stateName: "",
    sideNav: false
  }

  componentDidMount = () => {
    axios.get('https://api.ipdata.co/?api-key=test')
    .then(res => {
      // console.log(res.data.country_name)
      this.setState({stateName: res.data.country_name})
    })
    .catch (err => {
      console.log(err)
    })
  }

  sideNavClick = () => {
    this.setState({sideNav: true})
  }

  close = () => {
    this.setState({sideNav: false})
  }

  render() {
    return (
      <div className="landing-page-container">
        <div id="mySidenav" className={this.state.sideNav? "sidenav": "invisible"}>
            <a href="javascript:void(0)" className="closebtn" onClick = {this.close}>&times;</a>
            <a href="#">Features</a>
            <a href="#">About</a>
            <a href="#">Log in</a>
            {/* <a href="#">Contact</a> */}
        </div>
        <img className = "background-img" src = {backgroundImg} alt = "background"/>
        <header>
          <div className="logo-container">
            <img
              className="tryhard-logo"
              src={TryHardLogo}
              alt="tryhard-logo"
            />
            <p>Tryhard GG</p>
          </div>
          <img onClick = {this.sideNavClick} className = "side-nav" src = {sideMenu} alt = "side-menu"/>
          <div className = "nav-container">
            <p>Features</p>
            <p>About</p>
            <a href = "/"><img src = {DownloadButton} alt = "dowmload-button"/></a>
            <button className = "login-button">LOG IN</button>
          </div>
        </header>
        <div className="landing-body">
          <h1>Welcome to the worlds first Esports rewards platform</h1>
          <a target="_blank" href = {this.state.stateName === "India" ? "https://www.youtube.com": "https://google.com"}><img
            className="google-play-logo"
            src={GooglePlayLogo}
            alt="Google_play_logo"
          /></a>
        </div>
      </div>
    );
  }
}
