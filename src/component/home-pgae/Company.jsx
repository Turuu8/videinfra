import { CompanyCartsItems } from "../../utils";
import icon from "../../assets/images/icon-upward.svg";
import iconW from "../../assets/images/arrow-down-line-svgrepo-com.svg";
import { CompanyCards } from "./CompanyCards";
import { useState } from "react";
import { TextButtom } from "../ui/Buttom";

export const Company = () => {
  const [margin, setMargin] = useState(0);
  const handleRight = (item) => {
    if (margin === 3500) {
      return null;
    } else {
      setMargin(margin + item);
    }
  };
  const handleLeft = (item) => {
    if (margin === 0) {
      return null;
    } else {
      for (let i = 0; i < item; i++) {
        setMargin(margin - item);
      }
    }
  };
  return (
    <div className="company-content">
      <div className="head-row">
        <h2>Company</h2>
        <span>
          We are a strategic partner to our clients. We will help you to ideate, design and
          implement your product from conception to iterative development support, always taking the
          initiative and working proactively.
        </span>
      </div>
      <div className="years">
        <div>
          <p>20+</p>
          <p>Years of experience</p>
        </div>
      </div>
      <div className="about-as">
        <div className="hidden">
          <TextButtom text="More About Us" path="/company" />
        </div>
      </div>
      <div className="btn-cart">
        <div className="hover">
          <button
            style={
              margin <= 0
                ? {
                    transform: "translateY(0)",
                    opacity: "0.5",
                  }
                : {}
            }
            className="top"
          >
            <img src={icon} alt="" />
          </button>
          <button
            style={{
              display: margin <= 0 ? "none" : "block",
            }}
            onClick={() => handleLeft(700)}
            className="bottom"
          >
            <img src={iconW} alt="" />
          </button>
        </div>
        <div className="hover two">
          <button
            style={
              margin === 3500
                ? {
                    transform: "translateY(0)",
                    opacity: "0.5",
                  }
                : {}
            }
            className="top"
          >
            <img src={icon} alt="" />
          </button>
          <button
            style={{
              display: margin === 3500 ? "none" : "block",
            }}
            onClick={() => handleRight(700)}
            className="bottom"
          >
            <img src={iconW} alt="" />
          </button>
        </div>
      </div>
      <CompanyCards margin={margin} data={CompanyCartsItems} />
    </div>
  );
};
