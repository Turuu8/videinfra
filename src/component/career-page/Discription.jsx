export const Discription = (props) => {
  return (
    <div
      style={props.detail === "" ? { padding: "80px 140px 80px" } : {}}
      className="content-discription"
    >
      <div>
        <h5>
          <p>{props.headTop}</p>
          <p>{props.headBotton}</p>
        </h5>
        <span
          style={
            props.size === "38px"
              ? {
                  fontSize: "38px",
                  fontFamily: "Graphik LCG Medium",
                  lineHeight: "105%",
                  padding: "5px 0 0 20px ",
                }
              : props.headBotton === "Recognition"
              ? {
                  color: "#fff",
                  letterSpacing: "-0.04em",
                  padding: "0 0 240px 20px",
                }
              : {}
          }
        >
          {props.detail}
          {/* {props.detail === "" ? (
            props.detail
          ) : (
            <div className="addition-text">
              <p>{props.textTop}</p>
              <p>{props.textBottom}</p>
            </div>
          )} */}
        </span>
      </div>
    </div>
  );
};
