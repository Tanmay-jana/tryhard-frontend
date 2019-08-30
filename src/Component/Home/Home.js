import React, { Component } from 'react'
import LandingPage from './LandingPage/LandingPage';
import Games from './Games/Games';
import Features from './Features/Features';
import Winning from './WinningEarning/Winning';

export default class Home extends Component {
    render() {
        return (
            <div>
                <LandingPage/>
                <Games/>
                <Features/>
                <Winning/>
            </div>
        )
    }
}
