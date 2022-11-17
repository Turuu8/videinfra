import { CompanyCartsItems } from "../../datas";
import icon from "../../images/icon-upward.svg";
import { CompanyCards } from "./CompanyCards";

export const Company = () => {
  return (
    <div className="company-content">
      <div className="head-row">
        <h2>Company</h2>
        <span>
          We are a strategic partner to our clients. We will help you to ideate,
          design and implement your product from conception to iterative
          development support, always taking the initiative and working
          proactively.
        </span>
      </div>
      <div className="years">
        <div>
          <p>20+</p>
          <p>Years of experience</p>
        </div>
      </div>
      <div className="about-as">
        <div>
          <span>More About Us</span>
        </div>
      </div>
      <div className="btn-cart">
        <button>
          <img src={icon} alt="" />
        </button>
        <button>
          <img src={icon} alt="" />
        </button>
      </div>
      <CompanyCards data={CompanyCartsItems} />
    </div>
  );
};
