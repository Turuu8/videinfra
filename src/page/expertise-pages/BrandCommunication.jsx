import React from "react";
import { Headline } from "../../component";
import { ExpertiseBrandCommunicationItems } from "../../datas";

export const BrandCommunication = () => {
  return (
    <div className="brand-communication">
      <section className="headline-section">
        {ExpertiseBrandCommunicationItems.map((el, i) => (
          <Headline key={i} {...el} />
        ))}
      </section>
      <h1>BrandCommunication</h1>
      <h1>BrandCommunication</h1>
      <h1>BrandCommunication</h1>
    </div>
  );
};
