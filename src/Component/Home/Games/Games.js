import React, { Component } from 'react'
import './Games.css'
import CsGo from '../../../assets/csgo.jpg';
import Dota2 from '../../../assets/cb904b27a725d7840b9e2880d93d5e42fb57e8e6.png';

export default class Games extends Component {
    render() {
        return (
            <div className = "games-container">
                <div className = "games-text-container">
                    <h1>Your favorite games.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua\</p>
                </div>
                <div className = "image-game-container">
                    <img src = {CsGo} alt = "cs-go"/>
                    <img src = {Dota2} alt = "dota-2"/>
                </div>
            </div>
        )
    }
}
