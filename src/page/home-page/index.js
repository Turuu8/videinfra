import {
  Expertise,
  Intro,
  OurApabilities,
  Video,
  Company,
  Insights,
} from "../../component";
import { ExpertiseItems } from "../../datas";

export const HomePage = () => {
  return (
    <div className="home-page">
      <section className="top-pointer-events-section">
        <div className="background" />
        <div className="intro">
          <Intro />
        </div>
      </section>
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
