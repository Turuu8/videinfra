import plus from "../../assets/images/plus.black.svg";
import plusW from "../../assets/images/plus-white.svg";
import { useState } from "react";

export const CompanyCards = (props) => {
  let href = window.location.href.split("//")[1].split("/")[1];
  const [display, setDisplay] = useState(false);

  const handle = () => {
    setDisplay(!display);
  };
  return (
    <div
      style={{
        transform: `translateX(-${props.margin}px)`,
      }}
      className="home-page-company-carts"
    >
      {props.data.map(({ logoUrl, name, number, textOne, textTwo }, i) => (
        <button
          onClick={() => handle()}
          key={i}
          className="cart"
          style={
            href === "company"
              ? { backgroundColor: "#cdcecf" }
              : href === "expertise"
              ? { backgroundColor: "#eaebeb" }
              : {}
          }
        >
          <img style={{ opacity: display ? "0" : "1" }} src={logoUrl} alt="" />
          <p style={{ opacity: display ? "0" : "1" }}>{name}</p>
          <span className="text">
            <span>{textOne}</span>
            <span>{textTwo}</span>
          </span>
          <h3 className="number">{number}</h3>
          <div className="btn-add">
            <div style={{ backgroundColor: display ? "#191b1d" : "" }} className="hidden">
              <div
                className="top"
                style={
                  href === "company"
                    ? { backgroundColor: display ? "#191b1d" : "#bcbebf" }
                    : href === "expertise"
                    ? { backgroundColor: "#fff" }
                    : {}
                }
              >
                <img
                  style={{ transform: display ? "rotate(45deg)" : "" }}
                  src={display ? plusW : plus}
                  alt=""
                />
              </div>
              <div className="bottom">
                <img style={{ transform: display ? "rotate(45deg)" : "" }} src={plusW} alt="" />
              </div>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};
