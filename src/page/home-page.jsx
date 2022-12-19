import { Tween } from "react-gsap";
import { Expertise, Intro, OurApabilities, Video, Company, Insights } from "../component";
// import { ExpertiseItems } from "../../utils";
import { workType } from "../utils/work-cards-data";
// import "locomotive-scroll/dist/locomotive-scroll.css";
// import { LocomotiveScrollProvider } from "react-locomotive-scroll";
// import { useRef } from "react";

export const HomePage = () => {
  // const containerRef = useRef(null);
  return (
    <div className="home-page">
      <Tween
        to={{
          y: "-35vh",
          scrollTrigger: {
            trigger: "#top",
            start: "0 top",
            end: "100% top",
            scrub: 1.5,
          },
        }}
      >
        <section id="top" className="top-pointer-events-section">
          <Tween
            to={{
              y: "-45vh",
              scrollTrigger: {
                trigger: ".intro",
                start: "0 top",
                end: "100% top",
                scrub: 1,
              },
            }}
          >
            <div className="intro">
              <Intro />
            </div>
          </Tween>
        </section>
      </Tween>
      <Tween
        from={{
          marginTop: "-20%",
        }}
        to={{
          marginTop: "-7.5%",
          scrollTrigger: {
            trigger: "#video",
            start: "0 top",
            end: "50% top",
            scrub: 1,
          },
        }}
      >
        <div>
          <section id="video" className="video-section">
            <Video />
          </section>
        </div>
      </Tween>
      {workType.map((el, i) => (
        <section key={i} className="expertise-section">
          <Expertise {...el} number={four[i]} />
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
      {/* <LocomotiveScrollProvider
        options={{
          smooth: 0.1,
          // ... all available Locomotive Scroll instance options
        }}
        watch={
          [
            //..all the dependencies you want to watch to update the scroll.
            //  Basicaly, you would want to watch page/location changes
            //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
          ]
        }
        containerRef={containerRef}
      >
        <main className="home-page" data-scroll-container ref={containerRef}>
          <>
            
          </>
        </main>
      </LocomotiveScrollProvider> */}
    </div>
  );
};
const four = [{ num: "01" }, { num: "02" }, { num: "03" }, { num: "04" }];

// data-scroll-speed="0"
