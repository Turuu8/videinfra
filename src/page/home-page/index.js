import { useEffect, useState } from "react";
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
  const [j, sej] = useState(20.2725);
  const [j2, sej2] = useState(0);
  useEffect(() => {
    const handle = (event) => {
      if (window.scrollY > 500) {
      } else {
        sej((window.scrollY / 30) * 2 + 20.2725);
        if (window.scrollY > 300) {
        } else {
          sej2((window.scrollY / 17) * 2);
        }
      }
    };
    window.addEventListener("scroll", handle);
    return () => {
      window.removeEventListener("scroll", handle);
    };
  });
  console.log(j);
  return (
    <>
      <section className="top-pointer-events-section">
        <div
          style={{
            transform: `translateY(-${j}vh)`,
          }}
          className="background"
        />
        <div
          style={{
            transform: `translateY(-${j2}vh)`,
          }}
          className="intro"
        >
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
      {/* <HomeIntro /> */}
    </>
  );
};
