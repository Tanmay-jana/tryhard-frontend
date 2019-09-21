import React, { Component } from "react";
import QRCode from "qrcode-react";
import "./SubmitCode.css";
import Footer from "../Home/Footer/Footer";

// steam://rungame/730/\d[0-9]{17}/\+csgo_download_match\%20CSGO\d(-[A-Za-z0-9]{5}){5}

export default class SubmitCode extends Component {
  state = {
    link: "",
    qrvisible: false,
    width : 0,
    height: 0
  };

  constructor(props) {
    super(props);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0,0);
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  generateQrCode = e => {
    this.setState({ qrvisible: false });
    e.preventDefault();
    console.log(this.state.link);
    var re = /steam:\/\/rungame\/730\/[0-9]{17}\/\+csgo_download_match%20CSGO(-[A-Za-z0-9]{5}){5}/;
    // console.log(re.test(e.target.SHARECODE.value));
    if (re.test(e.target.SHARECODE.value)) {
      // console.log("Yes");
      this.setState({ link: e.target.SHARECODE.value, qrvisible: true });
    } else {
      // console.log("No");
      alert("Invalid input. Please check the match share code.")
      this.setState({ link: "", qrvisible: false });
    }
  };
  render() {
      console.log(this.state.width)
    return (
      <div className="code-container">
        <div className="code-body">
          <h1>Submit Match Share Code</h1>
          <p>
            Players who have already joined Counter Strike:Global Offensive
            league(s) on the tryhard.gg app should paste the match share code
            url in the text input below to generate a QR code, after which they
            should use the app to scan this code. Players can submit as many
            matches as they want, we will select the best games for them as per
            the league rules.
          </p>
          <form className="qr-form" onSubmit={this.generateQrCode}>
            <input
              type="text"
              id="SHARECODE"
              name="SHARECODE"
              placeholder="Paste Share Code here  (steam://rungame..)"
              className="required email-field input-field"
              //   pattern="(steam://rungame/730/)([0-9]{17})(/+)(csgo_download_match%20CSGO)(-[A-Za-z0-9]{5}){5}"
            />
            <input
              type="submit"
              value="GENERATE QR CODE"
              name="subscribe"
              id="subscribe"
              className="button btn btn-vanido"
            />
          </form>
          <div className={this.state.qrvisible ? "qr-visible" : "qr-invisible"}>
            <QRCode
              value={this.state.link}
              size = {this.state.width >= 700? 300:200}
              level = "Q"
              renderAs = "svg"
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
