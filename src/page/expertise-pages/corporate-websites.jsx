import React from "react";
import {
  Accordion,
  CaseStudies,
  Discription,
  Headline,
  Insights,
  JumpHomePageText,
  Results,
} from "../../component";
import {
  CorporateWebsitesCaseStudiesItems,
  DigitalResultItems,
  ExpertiseCorporateAccordionTwo,
  ExpertiseCorporateWebsitesDiscriptionItems,
  ExpertiseCorporateWebsitesDiscriptionItemsTwo,
  ExpertiseCorporateWebsitesItems,
  PersonIntroductionDigitalItem,
} from "../../utils";

export const CorporateWebsites = () => {
  return (
    <div className="corporate-websites">
      <section className="headline-section">
        {ExpertiseCorporateWebsitesItems.map((el, i) => (
          <Headline key={i} {...el} page={"two-line-headline"} />
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
          <Discription key={i} {...el} page={"two-line-container-discription"} />
        ))}
        {ExpertiseCorporateWebsitesDiscriptionItemsTwo.map((el, i) => (
          <Discription key={i} {...el} page={"two-line-discription"} />
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
      <section className="results-section">
        <Results data={PersonIntroductionDigitalItem} first={DigitalResultItems} />
      </section>
      <section className="insights-section">
        <Insights />
      </section>
      <JumpHomePageText props={"Expertise  / Corporate Websites"} />
    </div>
  );
};
