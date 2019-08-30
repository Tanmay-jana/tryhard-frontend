import React, { Component } from 'react'
import LandingPage from './LandingPage/LandingPage';
import Games from './Games/Games';
import Features from './Features/Features';

export default class Home extends Component {
    render() {
        return (
            <div>
                <LandingPage/>
                <Games/>
                <Features/>
            </div>
        )
    }
}
