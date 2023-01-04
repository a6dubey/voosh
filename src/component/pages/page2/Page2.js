import "./page2.css";
import React from "react";


const card_objects = [
  {
    id: 1,
    title: "Hassle free acess to Data",
    icon: "https://voosh.in/static/media/page2_icon1.bd81fbb0d7b3c7cc6c73.webp",
  },
  {
    id: 1,
    title: "Actionable Insights on all Reviews",
    icon: "https://voosh.in/static/media/page2_icon2.f6da4146e172e1077533.webp",
  },
  {
    id: 1,
    title: "Simplified Financial Reconcilliation",
    icon:"https://voosh.in/static/media/page2_icon3.ed022ee17fbd16103c32.webp",
  },
  {
    id: 1,
    title: "Higher Sales & Optimized Ops",
    icon: "https://voosh.in/static/media/page2_icon4.107569a415fc529cdbac.webp",
  },
];

const Page2 = () => {
  return (
    <div className="page2_container">
      <div className="page2-details-container">
        <div className="title">
          Understand your business better. Optimize sales and reduce costs.
        </div>
        <div className="subtext">
          Bring all your outlets and brands into one place. Track what’s working
          and what's not with a click.
        </div>
      </div>
      <div className="page2-features-container">
        {card_objects.map((item, ind) => (
          <div className="page2-feature-box" key={ind}>
            <img className="page2-feature-icon" src={item.icon} alt=""/>
            <div className="page2-feature-text">{item.title}</div>
          </div>
        ))}
      </div>
      <img className="page2-bg" src="https://voosh.in/static/media/understand_business_bg.04ac8480e6e2c5b1d1c9.webp" alt=""/>
    </div>
  );
};

export default Page2;
