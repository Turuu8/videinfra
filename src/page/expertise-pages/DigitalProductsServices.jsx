import React from "react";
import { Accordion, CaseStudies, Discription, Headline } from "../../component";
import {
  DigitalCaseStudiesItems,
  ExpertiseDigitalProductDesignItems,
  ExpertiseDigitalProductsAccordion,
  ExpertiseDigitalProductsAccordionTwo,
  ExpertiseDigitalProductsItems,
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
    </div>
  );
};
