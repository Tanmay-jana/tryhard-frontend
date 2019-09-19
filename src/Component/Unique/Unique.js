import React, { Component } from "react";
import "./Unique.css";
import Footer from "../Home/Footer/Footer";

export default class Unique extends Component {
  render() {
    return (
      <div className="unique-container">
        <div className = "unique-container-body">
        <h1 className = "unique-header">What makes us unique?</h1>
        <p className = "unique-body">
          You must be thinking why should you join our app when there are other
          reward platforms. Tryhard.gg is unique in the way that we do not
          organize any in-game lobbies or tournaments.All you need to do is join
          a league in our app and play your regular ranked/competitive matches.
          Your chance of winning rewards is completely dependent on your
          individual performance independent of the end result of your game.`
        </p>
        </div>
        <Footer/>
      </div>
    );
  }
}
