import { Tween } from "react-gsap";
import {
  Headline,
  JumpHomePageText,
  LocationPhone,
  WriteEmail,
} from "../../component";
import { ContactPageList } from "../../datas";

export const ContactPage = () => {
  return (
    <Tween
      // from={{
      //   y: "0",
      // }}
      to={{
        // y: "-100%",
        scrollTrigger: {
          trigger: ".contact-page",
          start: "0 0",
          end: "100% 100%",
          // pin: ".contact-page",
          anticipatePin: true,
          // pinSpacing: false,
          scrub: 1,
          markers: true,
        },
      }}
    >
      <div className="contact-page">
        <section className="headline-section">
          {ContactPageList.map((el, i) => (
            <Headline key={i} {...el} />
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
    </Tween>
  );
};
