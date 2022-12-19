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
  BrandDesignCaseStudiesItems,
  DigitalResultItems,
  ExpertiseBrandCommunicationAccordion,
  ExpertiseBrandCommunicationAccordionTwo,
  ExpertiseBrandCommunicationDiscriptionItems,
  ExpertiseBrandCommunicationItems,
  PersonIntroductionDigitalItem,
} from "../../utils";

export const BrandCommunication = () => {
  return (
    <div className="brand-communication">
      <section className="headline-section">
        {ExpertiseBrandCommunicationItems.map((el, i) => (
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
        {ExpertiseBrandCommunicationDiscriptionItems.map((el, i) => (
          <Discription key={i} {...el} page={"second-discription"} />
        ))}
      </section>
      <section className="accordion-expertise">
        {ExpertiseBrandCommunicationAccordion.map((el, i) => (
          <Accordion {...el} key={i} />
        ))}
      </section>
      <section className="accordion-expertise-two">
        {ExpertiseBrandCommunicationAccordionTwo.map((el, i) => (
          <Accordion {...el} key={i} props={"white"} />
        ))}
      </section>
      <section className="case-studies-section">
        <CaseStudies json={BrandDesignCaseStudiesItems} />
      </section>
      <section className="results-section">
        <Results data={PersonIntroductionDigitalItem} first={DigitalResultItems} />
      </section>
      <section className="insights-section">
        <Insights />
      </section>
      <JumpHomePageText props={"Expertise  / Brand & Communication Design"} />
    </div>
  );
};
