import "./page5.css";
import React from "react";


const AboutUs = () => {
  return (
    <div className="aboutUs_container">
      <div className="about-us-details-component">
        <div className="about-us-text-container">
          <div className="title">ABOUT US</div>
          <div className="subtext">
            <span className="brand-name">Voosh</span> is a food technology
            company aiming to empower Foodservice brands using our proprietary
            visualization tools and data science.We’re building a one stop
            visualization tool for CXOs, operational heads or zonal managers to
            get business insights and make real time decisions to help grow
            their online sales.
          </div>
        </div>
        <img src="https://voosh.in/static/media/about_us_bg.50f95238322901a23377.webp" className="about_us_bg" alt=""/>
      </div>
      <div className="about-us-investor">
        <div className="title">
          We are backed by some of the best global investors:
        </div>
        <div className="brands-container">
          <img className="brand-image" src="https://voosh.in/static/media/investor1.aca691c651a7684aec14.webp" alt=""/>
          <img className="brand-image" src="https://voosh.in/static/media/investor2.c804618546b843135ba7.webp" alt=""/>
          <img className="brand-image" src="https://voosh.in/static/media/investor3.64f72a3087a651802bcb.webp" alt=""/>
          <img className="brand-image" src="https://voosh.in/static/media/investor4.9645801b796a8576ab6f.webp" alt=""/>
          <img className="brand-image" src="https://voosh.in/static/media/investor5.fce4c7ae3dc258341971.webp" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
