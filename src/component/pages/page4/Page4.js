import "./page4.css";
import React from "react";


const Page4 = () => {
  return (
    <div className="page4_container">
      <div className="features_img_container">
        <img src="https://voosh.in/static/media/Financial_complexity.3d8bb64046c1ed9fa3d4.webp" className="features_img_icon" alt=""/>
      </div>

      <div className="page4_text_container">
        <div className="page_title_container">
          {/* <div className="bullet_icon"></div>
          <div className="page_title">Feature</div> */}
        </div>

        <div className="page_title_icon_container">
          <img src="https://voosh.in/static/media/serviceability_icon.0883cd4239aff4a3e82c.webp" className="page_title_icon" alt=""/>
        </div>
        <div className="title">
          Machine learning-powered insights into your reviews
        </div>
        <div className="subtitle">
          Understand all your reviews across Ubereats,Doordash etc.Understand
          what’s working and what isn’t on a store or brand level.
        </div>
      </div>
    </div>
  );
};

export default Page4;
