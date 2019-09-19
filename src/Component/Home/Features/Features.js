import React, { Component } from 'react'
import './Features.css'
import winnerImg from '../../../assets/winner.png';
import gameImg from '../../../assets/Group7.png';
import euroImg from '../../../assets/round-euro.png';
import analyticsImg from '../../../assets/analytics.png';
// import arrow from '../../../assets/square-right-03.png';

export default class Features extends Component {
    render() {
        return (
            <div  id = "features" className = "features-container">
                <h1>Built for gamers.</h1>
                <div className = "image-feature-container">
                    <div className ="feature-block">
                        <img src = {winnerImg} alt = "winner-img"/>
                        <h2>Join Leagues</h2>
                        <p>Every league has a unique scoring criteria. Join any league you want.</p>
                    </div>
                    <div className ="feature-block">
                        <img src = {gameImg} alt = "game-img"/>
                        <h2>Play the Game</h2>
                        <p>Play your competitive or ranked matchmaking like you normally do.</p>
                    </div>
                    <div className ="feature-block">
                        <img src = {analyticsImg} alt = "analystic-img"/>
                        <h2>Leaderboards</h2>
                        <p>No need to form a team - get scored basis your own performance independent of the end result</p>
                    </div>
                    <div className ="feature-block">
                        <img src = {euroImg} alt = "eurro-img"/>
                        <h2>Earn Cash Reward</h2>
                        <p>Get rewards immediately after the league ends according to your rank on the leaderboard.</p>
                    </div>
                </div>
                {/* <div className = "learn-more">Learn more <img src = {arrow} alt = "arrow"/></div> */}
            </div>
        )
    }
}
