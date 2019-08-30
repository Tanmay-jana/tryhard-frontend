import React, { Component } from 'react'
import "./Home.css"
import LandingPage from './LandingPage/LandingPage';
import Games from './Games/Games';
import Features from './Features/Features';
import Winning from './WinningEarning/Winning';
import Footer from './Footer/Footer';

export default class Home extends Component {
    render() {
        return (
            <div className = "home-container">
                <LandingPage/>
                <Games/>
                <Features/>
                <Winning/>
                <Footer/>
            </div>
        )
    }
}
