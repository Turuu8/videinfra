import React from "react";
import {
  DirectorPeople,
  Discription,
  Headline,
  OurClientContent,
  RecognitionContent,
  StatusNumber,
} from "../../component";
import {
  CompanyPageDirectorPeoples,
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
      <section className="director-people-section">
        {CompanyPageDirectorPeoples.map((el, i) => (
          <DirectorPeople key={i} {...el} />
        ))}
      </section>
      <section className="our-clients-section">
        <OurClientContent />
      </section>
      <section className="recognition-section">
        <RecognitionContent />
      </section>
    </div>
  );
};
