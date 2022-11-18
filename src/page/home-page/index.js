import gsap from "gsap";
import { ScrollTrigger, Tween } from "react-gsap";
import {
  Expertise,
  Intro,
  OurApabilities,
  Video,
  Company,
  Insights,
} from "../../component";
import { ExpertiseItems } from "../../datas";
// gsap.registerPlugin(ScrollTrigger);

export const HomePage = () => {
  return (
    <div className="home-page">
      <Tween
        to={{
          y: "-70vh",
          scrollTrigger: {
            trigger: ".top-pointer-events-section",
            start: "0 0",
            end: "50% 0",
            scrub: 0.7,
            markers: true,
          },
        }}
      >
        <section className="top-pointer-events-section">
          <Tween
            from={{
              y: "0",
            }}
            to={{
              y: "-20vh",
              scrollTrigger: {
                trigger: ".intro",
                start: "0 0",
                end: "50% 0",
                scrub: 0.5,
                markers: true,
              },
            }}
          >
            <div className="intro">
              <Intro />
            </div>
          </Tween>
        </section>
      </Tween>
      <section className="video-section">
        <Video />
      </section>
      {ExpertiseItems.map((el, i) => (
        <section key={i} className="expertise-section">
          <Expertise {...el} />
        </section>
      ))}
      <section className="our-apabilities-section">
        <OurApabilities />
      </section>
      <section className="company-section">
        <Company />
      </section>
      <section className="insights-section">
        <Insights />
      </section>
    </div>
  );
};
