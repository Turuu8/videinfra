import React from "react";
import {
  Accordion,
  CaseStudies,
  Discription,
  Headline,
  Insights,
  JumpHomePageText,
} from "../../component";
import {
  BrandDesignCaseStudiesItems,
  ExpertiseBrandCommunicationAccordion,
  ExpertiseBrandCommunicationAccordionTwo,
  ExpertiseBrandCommunicationDiscriptionItems,
  ExpertiseBrandCommunicationItems,
} from "../../datas";

export const BrandCommunication = () => {
  return (
    <div className="brand-communication">
      <section className="headline-section">
        {ExpertiseBrandCommunicationItems.map((el, i) => (
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
        {ExpertiseBrandCommunicationDiscriptionItems.map((el, i) => (
          <Discription key={i} {...el} />
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
      <section className="insights-section">
        <Insights />
      </section>
      <JumpHomePageText props={"Expertise  / Brand & Communication Design"} />
    </div>
  );
};
