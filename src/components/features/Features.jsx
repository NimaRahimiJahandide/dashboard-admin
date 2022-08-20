import React from "react";
import "./Features.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export default function features() {
  return (
    <div className="features">
      <div className="featuresItem">
        <span className="featuresTitle">Revanue</span>
        <div className="featuresContainer">
          <span className="featuresMoney">$2,415</span>
          <span className="featuresMoneyRate">
            -11.4 <ArrowDownwardIcon className="featuresIcon negative" />
          </span>
        </div>
        <span className="featuresSub">Compared to last month</span>
      </div>
      <div className="featuresItem">
        <span className="featuresTitle">Sales</span>
        <div className="featuresContainer">
          <span className="featuresMoney">$4,415</span>
          <span className="featuresMoneyRate">
            -1.4 <ArrowDownwardIcon className="featuresIcon negative" />
          </span>
        </div>
        <span className="featuresSub">Compared to last month</span>
      </div>
      <div className="featuresItem">
        <span className="featuresTitle">Cost</span>
        <div className="featuresContainer">
          <span className="featuresMoney">$2,225</span>
          <span className="featuresMoneyRate">
            +2.4 <ArrowUpwardIcon className="featuresIcon" />
          </span>
        </div>
        <span className="featuresSub">Compared to last month</span>
      </div>
    </div>
  );
}
