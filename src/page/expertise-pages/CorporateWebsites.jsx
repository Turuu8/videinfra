import React from "react";
import { Accordion, CaseStudies, Discription, Headline } from "../../component";
import {
  CorporateWebsitesCaseStudiesItems,
  ExpertiseCorporateAccordionTwo,
  ExpertiseCorporateWebsitesDiscriptionItems,
  ExpertiseCorporateWebsitesDiscriptionItemsTwo,
  ExpertiseCorporateWebsitesItems,
} from "../../datas";

export const CorporateWebsites = () => {
  return (
    <div className="corporate-websites">
      <section className="headline-section">
        {ExpertiseCorporateWebsitesItems.map((el, i) => (
          <Headline key={i} {...el} />
        ))}
      </section>
      <div
        style={{
          width: "100%",
          height: "8px",
        }}
      ></div>
      <section className="discription-section">
        {ExpertiseCorporateWebsitesDiscriptionItems.map((el, i) => (
          <Discription key={i} {...el} />
        ))}
        {ExpertiseCorporateWebsitesDiscriptionItemsTwo.map((el, i) => (
          <Discription key={i} {...el} />
        ))}
      </section>
      <section className="accordion-expertise-two">
        {ExpertiseCorporateAccordionTwo.map((el, i) => (
          <Accordion {...el} key={i} props={"white"} />
        ))}
      </section>
      <section className="case-studies-section">
        <CaseStudies json={CorporateWebsitesCaseStudiesItems} />
      </section>
      <h1>CorporateWebsites</h1>
      <h1>CorporateWebsites</h1>
      <h1>CorporateWebsites</h1>
    </div>
  );
};
