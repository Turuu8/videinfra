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
  DigitalCaseStudiesItems,
  DigitalResultItems,
  ExpertiseDigitalProductDesignItems,
  ExpertiseDigitalProductsAccordion,
  ExpertiseDigitalProductsAccordionTwo,
  ExpertiseDigitalProductsItems,
  PersonIntroductionDigitalItem,
} from "../../datas";

export const DigitalProductsServices = () => {
  return (
    <div className="digital-products">
      <section className="headline-section">
        {ExpertiseDigitalProductDesignItems.map((el, i) => (
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
        {ExpertiseDigitalProductsItems.map((el, i) => (
          <Discription key={i} {...el} />
        ))}
      </section>
      <section className="accordion-expertise">
        {ExpertiseDigitalProductsAccordion.map((el, i) => (
          <Accordion {...el} key={i} />
        ))}
      </section>
      <section className="accordion-expertise-two">
        {ExpertiseDigitalProductsAccordionTwo.map((el, i) => (
          <Accordion {...el} key={i} props={"white"} />
        ))}
      </section>
      <section className="case-studies-section">
        <CaseStudies json={DigitalCaseStudiesItems} />
      </section>
      <section className="results-section">
        <Results
          data={PersonIntroductionDigitalItem}
          first={DigitalResultItems}
        />
      </section>
      <section className="insights-section">
        <Insights />
      </section>
      <JumpHomePageText props={"Expertise  / Digital Products & Services"} />
    </div>
  );
};
