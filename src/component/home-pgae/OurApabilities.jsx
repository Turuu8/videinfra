import { useState } from "react";
import icon from "../../assets/images/arrow-down-line-svgrepo-com.svg";
import icon2 from "../../assets/images/arrow.line.svg";

export const OurApabilities = () => {
  const [click, setClick] = useState(false);
  // const handle = (e) => {
  //   // e.target.style.height = "150px";
  // };
  return (
    <div className="apabilities">
      <div className="content">
        <div className="headline">
          <h5>Our Capabilities</h5>
        </div>
        <div className="accordion">
          {names.map((it, i) => (
            <div key={i}>
              <button onClick={() => setClick(!click)} className="hover">
                <h3>{it.type}</h3>
                <span
                  style={{
                    backgroundColor: click ? "#fff" : "",
                  }}
                >
                  <div className="top">
                    <img
                      style={{ transform: click ? "rotate(180deg)" : "" }}
                      src={click ? icon2 : icon}
                      alt=""
                    />
                  </div>
                  <div className="bottom">
                    <img style={{ transform: click ? "rotate(180deg)" : "" }} src={icon2} alt="" />
                  </div>
                </span>
              </button>
              <div
                style={{
                  display: !click ? "none" : "block",
                  height: "150px",
                  color: "#fff",
                }}
              >
                {it.detail}
              </div>
            </div>
          ))}
        </div>
        <div className="big-cricles">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

const names = [
  {
    type: "Web & mobile apps",
    detail: "Services, self-care, eCommerce, payments, custom apps for enterprises and startups.",
  },
  {
    type: "UX & product design",
    detail:
      "User research, CJMs, prototyping, value proposition validation, design iterations, design systems and UI kits.",
  },
  {
    type: "Product development",
    detail:
      "MVP, MLP, fast prototyping, agile development, React, Vue FE, Symfony-based BE, AWS, support, maintenance, scaling up.",
  },
  {
    type: "Award-class web design",
    detail:
      "World-class advanced promo and corporate creative websites, numerous FWA, Awwwards, CSSDA Site Of The Day winners.",
  },
  {
    type: "Communication design",
    detail: "Naming, branding, communication strategy, 3D, print, copywriting.",
  },
];
