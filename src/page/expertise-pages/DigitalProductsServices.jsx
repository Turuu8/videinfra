import React from "react";
import { Headline } from "../../component";
import { ExpertiseDigitalProductDesignItems } from "../../datas";

export const DigitalProductsServices = () => {
  return (
    <div className="digital-products">
      <section className="headline-section">
        {ExpertiseDigitalProductDesignItems.map((el, i) => (
          <Headline key={i} {...el} />
        ))}
      </section>
      <h1>DigitalProductsServices</h1>
      <h1>DigitalProductsServices</h1>
      <h1>DigitalProductsServices</h1>
      <h1>DigitalProductsServices</h1>
    </div>
  );
};
