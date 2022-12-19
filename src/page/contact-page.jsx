import { Headline, JumpHomePageText, LocationPhone, WriteEmail } from "../component";
import { ContactPageList } from "../utils";

export const ContactPage = () => {
  return (
    <div className="contact-page">
      <section className="headline-section">
        {ContactPageList.map((el, i) => (
          <Headline key={i} {...el} page={"two-line-headline"} />
        ))}
      </section>
      <section className="location-phone">
        <LocationPhone />
      </section>
      <section className="write-email-section">
        <WriteEmail />
        <JumpHomePageText props={"Contact"} />
      </section>
    </div>
  );
};
