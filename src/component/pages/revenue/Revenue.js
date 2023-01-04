import React from "react";
import "./revenue.css";

function Revenue() {
  return (
    <div className="revenue-container">
      <div className="revenue-inner-container">
        <div className="revenue-title">
          Since partnering with Voosh, restaurant partners have seen an average
          increase of 10% in revenues
        </div>
        <div className="revenue-subtext">Along with:</div>
        <div className="revenue-states-container">
          <div className="revenue-states-box">
            <div className="revenue-state-value">10%</div>
            <div className="revenue-state-subtext">Increase in revenue</div>
            <div className="revenue-state-title">Better Operations</div>
          </div>
          <div className="revenue-states-box">
            <div className="revenue-state-value">0.5+</div>
            <div className="revenue-state-subtext">
              Increase in Customer ratings
            </div>
            <div className="revenue-state-title">Better CX</div>
          </div>
          <div className="revenue-states-box">
            <div className="revenue-state-value">5%</div>
            <div className="revenue-state-subtext">
              Extra payout by DD and UE
            </div>
            <div className="revenue-state-title">Better Financial</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Revenue;
