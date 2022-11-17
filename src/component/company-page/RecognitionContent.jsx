import React from "react";
import {
  CompanyPageRecognitionItems,
  RecognitionCardItems,
} from "../../datas/company-page";
import { Discription } from "../career-page/Discription";
import refresh from "../../images/refresh.icon.svg";
import { CompanyCards } from "../home-pgae/CompanyCards";
import { JumpHomePageText } from "../JumpHomePageText";
import arrow from "../../images/downLine-white.svg";

export const RecognitionContent = () => {
  return (
    <div className="content-recognition">
      <div className="discription-section">
        {CompanyPageRecognitionItems.map((el, i) => (
          <Discription key={i} {...el} />
        ))}
      </div>
      <div className="award-lists">
        <div className="list-container">
          <div className="refresh-icon">
            <img src={refresh} alt="" />
          </div>
          <h1>
            <span>Top 5 Design Agencies Worldwide.</span> CSS Design Awards
          </h1>
        </div>
      </div>
      <div className="btns">
        <button>
          <img style={{ transform: "rotate(90deg)" }} src={arrow} alt="" />
        </button>
        <button>
          <img style={{ transform: "rotate(-90deg)" }} src={arrow} alt="" />
        </button>
      </div>
      <div className="recognition-cards">
        <CompanyCards data={RecognitionCardItems} />
      </div>
      <JumpHomePageText props={"Company"} />
    </div>
  );
};
