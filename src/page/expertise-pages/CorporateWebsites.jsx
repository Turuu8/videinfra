import React from "react";
import { Headline } from "../../component";
import { ExpertiseCorporateWebsitesItems } from "../../datas";

export const CorporateWebsites = () => {
  return (
    <div className="corporate-websites">
      <section className="headline-section">
        {ExpertiseCorporateWebsitesItems.map((el, i) => (
          <Headline key={i} {...el} />
        ))}
      </section>
      <h1>CorporateWebsites</h1>
      <h1>CorporateWebsites</h1>
      <h1>CorporateWebsites</h1>
    </div>
  );
};
