import "./page3.css";
import React from "react";


const Page3 = () => {
  return (
    <div className="page3_container">
      <div className="page3_text_container">
        <div className="page_title_container">
          {/* <div className='bullet_icon'></div>
                    <div className='page_title'>Feature</div> */}
        </div>

        <div className="page_title_icon_container">
          <img src="https://voosh.in/static/media/free_access.8ce7ed5e6bacd50afa8f.webp" className="page_title_icon" alt=""/>
        </div>
        <div className="title">
          Centralized Dashboard for all your outlets and brands
        </div>
        <div className="subtitle">
          All your data brought together under a single dashboard. Giving you
          10,000 ft. view as well as granular order-level data.
        </div>
      </div>

      <div className="features_img_container">
        <img src="https://voosh.in/static/media/Centralised_Dashboard.7fe8fbe19c9da11d90e3.webp" className="features_img_icon" alt=""/>
      </div>
    </div>
  );
};

export default Page3;
