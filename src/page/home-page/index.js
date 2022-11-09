import { useEffect, useState } from "react";
import {
  Expertise,
  Intro,
  OurApabilities,
  Video,
  Company,
  Insights,
} from "../../component";

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
      {expertiseItems.map((el, i) => (
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
const expertiseItems = [
  {
    num: "01",
    headlineTop: "Digital Products & Services",
    headlineBottom:
      "From idea to a product: creating successful digital services for innovative startups and established businesses with cutting-edge UX, UI design,front and back-end development.",
    workOneUrl:
      "https://videinfra.com/assets/images/media/works/follow-art/preview-list@xxl.webp",
    workOneTextHead: "Follow Art",
    workOneText: "Marketplace",
    workTwoUrl:
      "https://videinfra.com/assets/images/media/works/tasky/preview-list@xxl.webp",
    workTwoTextHead: "Tasky",
    workTwoText: "Marketplace",
  },
  {
    num: "02",
    headlineTop: "eCommerce",
    headlineBottom:
      "High-class eCommerce solutions with research-grounded UX design, award-class UI design and top-grade front-end and back-end development.",
    workOneUrl:
      "https://videinfra.com/assets/images/media/works/amaffi/preview-list@lg.webp",
    workOneTextHead: "Amaffi",
    workOneText: "Online Store",
    workTwoUrl:
      "https://videinfra.com/assets/images/media/works/bite/preview-list@lg.webp",
    workTwoTextHead: "Bite",
    workTwoText: "Self-Service, Online Store, Corporate Website",
  },
  {
    num: "03",
    headlineTop: "Corporate Websites",
    headlineBottom:
      "Inspiring, functional, and result-oriented websites for enterprises. Full-cycle award-winning solutions from website strategy to complex custom development.",
    workOneUrl:
      "https://videinfra.com/assets/images/media/works/fci/preview-list@lg.webp",
    workOneTextHead: "Food Compliance",
    workOneText: "Corporate Website",
    workTwoUrl:
      "https://videinfra.com/assets/images/media/works/ava-group/preview-list@lg.webp",
    workTwoTextHead: "AVA Group",
    workTwoText: "Corporate Website",
  },
  {
    num: "04",
    headlineTop: "Brand & Communication Design",
    headlineBottom:
      "Rich and inspiring communication solutions, from brand development, promo websites to 3D and print.",
    workOneUrl:
      "https://videinfra.com/assets/images/media/works/p9/preview-list@lg.webp",
    workOneTextHead: "Poklonnaya 9",
    workOneText: "Promo Website",
    workTwoUrl:
      "https://videinfra.com/assets/images/media/works/3d-works/preview-list@lg.webp",
    workTwoTextHead: "3D & Visualisation Works",
    workTwoText: "3D & Visualisation",
  },
];
