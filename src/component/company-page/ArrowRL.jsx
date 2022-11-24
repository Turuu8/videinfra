import arrow from "../../images/arrow.line.svg";

export const ArrowRL = () => {
  return (
    <>
      <button
        className="arrow-buttons"
        style={{
          transform: "rotate(90deg)",
          marginRight: "2.5px",
        }}
      >
        <img src={arrow} alt="" />
      </button>
      <button
        className="arrow-buttons"
        style={{
          transform: "rotate(-90deg)",
          marginLeft: "2.5px",
        }}
      >
        <img src={arrow} alt="" />
      </button>
    </>
  );
};
