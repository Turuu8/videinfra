import {
  Accordion,
  CaseStudies,
  Discription,
  Headline,
  Insights,
  JumpHomePageText,
  Results,
  TechnologiesCards,
} from "../../component";
import {
  ECommerceCaseStudiesItems,
  ECommerceResultItems,
  ExpertiseECommerceAccordion,
  ExpertiseECommerceAccordionTwo,
  ExpertiseECommerceDiscriptionItems,
  ExpertiseECommerceDiscriptionItemsTwo,
  ExpertiseECommerceItems,
  ExpertiseECommerceTechnologiesItems,
  PersonIntroductionDigitalItem,
} from "../../datas";

export const ECommercePage = () => {
  return (
    <div className="eCommerce">
      <section className="headline-section">
        {ExpertiseECommerceItems.map((el, i) => (
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
        {ExpertiseECommerceDiscriptionItems.map((el, i) => (
          <Discription key={i} {...el} />
        ))}
        {ExpertiseECommerceDiscriptionItemsTwo.map((el, i) => (
          <Discription key={i} {...el} />
        ))}
      </section>
      <section className="accordion-expertise">
        {ExpertiseECommerceAccordion.map((el, i) => (
          <Accordion {...el} key={i} />
        ))}
      </section>
      <section className="accordion-expertise-two">
        {ExpertiseECommerceAccordionTwo.map((el, i) => (
          <Accordion {...el} key={i} props={"white"} />
        ))}
      </section>
      <section className="discription-section">
        {ExpertiseECommerceTechnologiesItems.map((el, i) => (
          <Discription key={i} {...el} />
        ))}
      </section>
      <section className="technologies-cards-section">
        <TechnologiesCards />
      </section>
      <section className="case-studies-section">
        <CaseStudies json={ECommerceCaseStudiesItems} />
      </section>
      <section className="results-section">
        <Results
          data={PersonIntroductionDigitalItem}
          first={ECommerceResultItems}
        />
      </section>
      <section className="insights-section">
        <Insights />
      </section>
      <JumpHomePageText props={"Expertise  / eCommerce"} />
    </div>
  );
};
