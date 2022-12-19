import arrowDownB from "../../assets/images/arrow.line.svg";
import arrowDownW from "../../assets/images/downLine-white.svg";

export const Accordion = (props) => {
  return (
    <div className="container-accordion">
      <h3>{props.firstWord}</h3>
      <div className="names">
        {props.names.map((el, i) => (
          <div
            key={i}
            className="container"
            style={
              i === 0
                ? {
                    border: "none",
                  }
                : {}
            }
          >
            <h4>{el.name}</h4>
            <div>
              {props.props === "white" ? (
                <img src={arrowDownW} alt="" />
              ) : (
                <img src={arrowDownB} alt="" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
