import arrow from "../../images/arrow.line.svg";
import arrowW from "../../images/downLine-white.svg";

export const ArrowRL = ({ props }) => {
  return (
    <>
      <button
        className={props === "black" ? "arrow-buttonsTwo" : "arrow-buttons"}
        style={{
          transform: "rotate(90deg)",
          marginRight: "2.5px",
        }}
      >
        {props === "black" ? (
          <img src={arrowW} alt="" />
        ) : (
          <img src={arrow} alt="" />
        )}
      </button>
      <button
        className={props === "black" ? "arrow-buttonsTwo" : "arrow-buttons"}
        style={{
          transform: "rotate(-90deg)",
          marginLeft: "2.5px",
        }}
      >
        {props === "black" ? (
          <img src={arrowW} alt="" />
        ) : (
          <img src={arrow} alt="" />
        )}
      </button>
    </>
  );
};
