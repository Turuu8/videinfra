import React from "react";
import { Discription, Headline, StatusNumber } from "../../component";
import {
  CompanyPageList,
  CompanyPageTextItems,
} from "../../datas/company-page";

export const CompanyPage = () => {
  return (
    <div className="company-page">
      <section className="headline-section">
        {CompanyPageList.map((el, i) => (
          <Headline key={i} {...el} />
        ))}
      </section>
      <section className="discription-section">
        {CompanyPageTextItems.map((el, i) => (
          <Discription key={i} {...el} />
        ))}
      </section>
      <section className="status-number-section">
        <StatusNumber />
      </section>
    </div>
  );
};
