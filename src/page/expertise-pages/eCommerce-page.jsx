import { Headline } from "../../component";
import { ExpertiseECommerceItems } from "../../datas";

export const ECommercePage = () => {
  return (
    <div className="eCommerce">
      <section className="headline-section">
        {ExpertiseECommerceItems.map((el, i) => (
          <Headline key={i} {...el} />
        ))}
      </section>
      <div>eCommercePage</div>
      <div>eCommercePage</div>
      <div>eCommercePage</div>
    </div>
  );
};
