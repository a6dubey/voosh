import "./page1a.css";
import React, { useEffect, useState } from "react";

const OutletPage = () => {
  const [showVerticalGraphic, setShowVerticalGraphic] = useState(false);
  useEffect(
    () =>
      window.addEventListener("resize", () => {
        if (window.innerWidth < 992) {
          setShowVerticalGraphic(true);
        } else {
          setShowVerticalGraphic(false);
        }
      }),
    []
  );
  return (
    <div className="outletPage_container">
      <div className="container">
        <div className="title_heading">
          Foodservice brands lack the ability to streamline data from multiple
          sources on one platform
        </div>
        <div className="title_subheading">
          Different data channels do not speak to each other
        </div>
      </div>
      <div className="image_container">
        <img
          src={showVerticalGraphic ? "https://voosh.in/static/media/outlet_graphic_vertical.5eb9c32fdba41e249ef4.webp" : "https://voosh.in/static/media/outlet_graphic.b3bec4452172330b0084.webp"}
          className="image_icon" alt=""
        />
      </div>
    </div>
  );
};

export default OutletPage;
