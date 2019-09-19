import React, { Component } from "react";
import "./About.css";
import Footer from "../Home/Footer/Footer";

export default class About extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="About-container">
        <h1 className="about-header">About us</h1>
        <div className="about-body">
          <h2>Who are we?</h2>
          <p>
            We are a group of engineers who are ardent gamers, thinkers and
            passionate about technology. We want to revolutionize the gaming
            ecosystem by building a one of its kind reward platform aimed at all
            our gamers-next-door who want an opportunity to earn rewards by
            crushing their opponents in their favorite team/individual game, no
            matter the end result.
          </p>

          <h2>Why did we build Tryhard?</h2>
          <p>
            A lot of us are gaming enthusiasts, but due to factors one too many,
            we are never able to enter the professional world of Gaming or
            participate in the biggest ESports events. We realized this to be a
            pain point that needed solving.
          </p>
          <p>
            Tryhard is aimed at bringing those everyday gamers together on a
            platform and give them a chance to participate in leagues to
            compete, conquer and get rewarded. We are working towards gaming
            casual gaming more competitive and fun!
          </p>
          <p>Think gaming, think Tryhard!</p>
        </div>
        <Footer />
      </div>
    );
  }
}
