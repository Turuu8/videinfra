import React from "react";
import { CompanyPageRecognitionItems } from "../../datas/company-page";
import { Discription } from "../career-page/Discription";
import refresh from "../../images/refresh.icon.svg";

export const RecognitionContent = () => {
  return (
    <div className="content-recognition">
      <div className="discription-section">
        {CompanyPageRecognitionItems.map((el, i) => (
          <Discription key={i} {...el} />
        ))}
      </div>
      <div className="award-lists">
        <div>
          <div className="refresh-icon">
            <img src={refresh} alt="" />
          </div>
        </div>
        <h1>
          <span>Top 5 Design Agencies Worldwide.</span> CSS Design Awards
        </h1>
      </div>
    </div>
  );
};
