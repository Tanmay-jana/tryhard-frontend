/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Unique from "./Component/Unique/Unique";
import Terms from "./Component/Terms/Terms";
import TryHardLogo from "./assets/429e9bf8b8a94aa87be06f9a038c4d1f014a0941.png";
import sideMenu from "./assets/menu-icon-1@2x.png";
import discord from "./assets/discord.png";
import Privacy from "./Component/Privacy/Privacy";
import SubmitCode from './Component/SubmitCode/SubmitCode'

export default class App extends Component {
  state = {
    sideNav: false,
    scrolled: false
  };

  componentDidMount = () => {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      if (isTop !== true) {
        this.setState({ scrolled: true });
      } else {
        this.setState({ scrolled: false });
      }
    });
  };

  componentWillUnmount() {
    window.removeEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      if (isTop !== true) {
        this.setState({ scrolled: true });
      } else {
        this.setState({ scrolled: false });
      }
    });
  }

  sideNavClick = () => {
    this.setState({ sideNav: true });
  };

  close = () => {
    this.setState({ sideNav: false });
  };

  render() {
    return (
      <BrowserRouter className="App">
        <div
          id="mySidenav"
          className={this.state.sideNav ? "sidenav" : "invisible"}
        >
          <a
            className="closebtn"
            onClick={this.close}
          >
            &times;
          </a>
          <a onClick={this.close} href="/#features">
            Features
          </a>
          <a onClick={this.close} href="/submitcode">
            Submit Match share code
          </a>
          <a onClick={this.close} className="discord-block">
            {/* <p className="nav-option">Join us on</p>{" "} */}
            <img className="discord-logo" src={discord} alt="discord" />
          </a>
          {/* <a href="#">Log in</a> */}
          {/* <a href="#">Contact</a> */}
        </div>

        <header
          className={this.state.scrolled === false ? "header1" : "solid-header"}
        >
          <a className="logo-link" href="/">
            <div className="logo-container">
              <img
                className="tryhard-logo"
                src={TryHardLogo}
                alt="tryhard-logo"
              />
              <p>Tryhard</p>
            </div>
          </a>
          <img
            onClick={this.sideNavClick}
            className="side-nav"
            src={sideMenu}
            alt="side-menu"
          />
          <div className="nav-container">
            <a className="nav-option" href="/#features">
              Features
            </a>
            <Link to = "/submitcode" className="nav-option">Submit Match share code</Link>
            <a className="discord-block">
              {/* <p className="nav-option">Join us on</p>{" "} */}
              <img className="discord-logo" src={discord} alt="discord" />
            </a>
            {/* <a href="/">
                <img src={DownloadButton} alt="dowmload-button" />
              </a> */}
            {/* <button className="login-button">LOG IN</button> */}
          </div>
        </header>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/unique" component={Unique} exact />
        <Route path="/terms" component={Terms} exact />
        <Route path="/privacy" component={Privacy} exact />
        <Route path = "/submitcode" component = {SubmitCode} exacr/>
      </BrowserRouter>
    );
  }
}
