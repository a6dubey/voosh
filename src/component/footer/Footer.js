import "./footer.css";
import React from "react";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="left_container">
        <div>
          <img src="https://voosh.in/static/media/VooshLogo.c64bcebd40a2d49cc591.webp" className="voosh_logo" alt=""/>
        </div>
        <div className="description">
          A company that is dedicated to making food a more personal experience,
          through technology and data.
        </div>
      </div>
      <div className="right_container">
        <div className="heading">Contact</div>

        <a href="/" target="/blank" className="subheading">
          Call Us
        </a>

        <a href="/" target="/blank" className="subheading">
          E-mail Us
        </a>

        <div className="social_container">
          <a href="https://www.facebook.com/vooshindia/">
            <img src="https://voosh.in/static/media/Facebook.a6cf0b1d149e660f77b1.webp" className="social_icon" alt=""/>
          </a>
          <a href="https://www.instagram.com/vooshindia/?hl=en">
            <img src="https://voosh.in/static/media/Instagram.4960637dc7b96bb2a893.webp" className="social_icon" alt=""/>
          </a>
          <a href="https://mobile.twitter.com/vooshindia">
            <img src="https://voosh.in/static/media/Twitter.4aa8602736baaaf9cf29.webp" className="social_icon" alt=""/>
          </a>
          <a href="https://www.linkedin.com/authwall?trk=bf&amp;trkInfo=AQHlkYD1eo2WrQAAAYFRU7AAVX_Z3k6yMvrpaww70Wfiv3QhvYIP9T7E1VjEUqiMzNSuUur6Cm5Y9sL2f49gKFhDtLRtup0VvCzzYVGLFJsvZpGF7RYa4PiZ4-n5vWqBbCkO4bY=&amp;original_referer=&amp;sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fvooshfoods%2F">
            <img src="https://voosh.in/static/media/LinkedIn.46b250e64fb2a82b9e9f.webp" className="social_icon" alt=""/>
          </a>
        </div>
      </div>
      <div className="signature_container">
        <img src="https://voosh.in/static/media/Signature.cfd001ca1ebb6fc9a004.webp" className="signature_icon" alt=""/>
      </div>
    </div>
  );
};

export default Footer;