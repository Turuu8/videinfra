import { useEffect, useRef, useState } from "react";
import {
  Expertise,
  Intro,
  OurApabilities,
  Video,
  Company,
  Insights,
} from "../../component";
import useLocoScroll from "../../component/useLocoScroll";
import { ExpertiseItems } from "../../datas";

export const HomePage = () => {
  const [preloeader, setPreleader] = useState(true);

  useLocoScroll(!preloeader);

  const [time, setTime] = useState(2);
  const id = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreleader(false);
  };
  useEffect(() => {
    id.current = window.setInterval(() => {
      setTime((timer) => timer - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (time === 0) {
      clear();
    }
  }, [time]);

  return (
    <div id="home" className="home-page" data-scroll-container>
      <section className="top-pointer-events-section">
        <div className="intro">
          <Intro />
        </div>
      </section>
      {/* <Tween
          from={{
            y: "0",
          }}
          to={{
            y: "-60vh",
            scrollTrigger: {
              trigger: ".top-pointer-events-section",
              start: "0 0",
              pin: false,
              pinSpacing: true,
              end: "100% 40%",
              scrub: 2,
              markers: true,
            },
          }}
        >
      </Tween> */}

      {/* <Tween
        from={{
          y: "-26.5vh",
        }}
        to={{
          y: "26.5vh",
          scrollTrigger: {
            trigger: ".video-section",
            start: "0  bottom",
            end: "bottom center ",
            scrub: true,
            markers: true,
          },
        }}
      > */}
      <section className="video-section">
        <Video />
      </section>
      {/* </Tween> */}
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
