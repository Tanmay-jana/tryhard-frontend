/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react'
import "./Footer.css"
import mainLogo from '../../../assets/429e9bf8b8a94aa87be06f9a038c4d1f014a0941.png';
import {Link} from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className = "footer-logo-container">
                    <img src = {mainLogo} alt = "main-logo"/>
                    <p>2019 All rights reserved</p>
                </div>
                {/* <div className = "footer-block product">
                    <h4>Product</h4>
                    <p>Android</p>
                    <p>Web</p>
                </div>
                <div className = "footer-block company">
                    <h4>Company</h4>
                    <p>Blog</p>
                    <p>About us</p>
                </div>
                <div className = "footer-block websites">
                    <h4>Websites</h4>
                    <p>Terms</p>
                    <p>Privacy policy</p>
                </div>
                <div className = "footer-block social">
                    <h4>Social</h4>
                    <p>Instagram</p>
                    <p>Discord</p>
                </div> */}
                <Link to = "/about" className = "footer-links">About</Link>
                <Link to = "/unique" className = "footer-links">What makes us unique</Link>
                <Link className = "footer-links" to = "/terms">Terms & Conditions</Link>
                <Link className = "footer-links" to = "/privacy">Privacy Policy</Link>
                <div className = "social-icons-holder">
                <a href = "https://www.facebook.com/tryhardggesport/" target = "_blank"><i className="footer-links fa fa-facebook"></i></a>
                <a href = "https://twitter.com/tryhardggesport" target = "_blank"><i className="footer-links fa fa-twitter"></i></a>
                <a href = "https://www.instagram.com/tryhardgg_esports/" target = "_blank"><i className="footer-links fa fa-instagram"></i></a>
                </div>
            </footer>
        )
    }
}
