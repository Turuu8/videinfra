import { useEffect, useRef, useState } from "react";
import {
  Expertise,
  Intro,
  OurApabilities,
  Video,
  Company,
  Insights,
} from "../../component";
import useLocoScroll from "../../component/test/useLocoScroll";
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
    <div id="home" className="home-page">
      <section className="top-pointer-events-section">
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
