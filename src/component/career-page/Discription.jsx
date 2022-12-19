import { InView } from "react-intersection-observer";

export const Discription = (props) => {
  return (
    <InView threshold="0" triggerOnce>
      {({ inView, ref }) => (
        <div
          className={props.page}
          style={
            props.page === "content-discription"
              ? {}
              : {
                  transform: inView ? "translateY(0)" : "translateY(200px)",
                  opacity: inView ? "1" : "0",
                }
          }
        >
          <div className="top-border">
            <div>
              <h5
                style={
                  props.page === "content-discription"
                    ? {
                        transform: inView ? "translateY(0)" : "translateY(150px)",
                        opacity: inView ? "1" : "0",
                        lineHeight: inView ? "115%" : "250%",
                      }
                    : {}
                }
              >
                <p ref={ref}>{props.headTop}</p>
                <p ref={ref}>{props.headBotton}</p>
              </h5>
              <h6
                ref={ref}
                style={
                  props.page === "content-discription"
                    ? {
                        transform: inView ? "translateY(0)" : "translateY(70%)",
                        opacity: inView ? "1" : "0",
                        lineHeight: inView ? "115%" : "250%",
                      }
                    : {}
                }
              >
                {props.detail}
              </h6>
              {props.textTop ? (
                <div className="result-text">
                  <span>{props.textTop}</span>
                  <span>{props.textBottom}</span>
                </div>
              ) : (
                <></>
              )}
              {props.numberStatus ? <h1 style={{ color: "#fff" }}>hello</h1> : <></>}
            </div>
          </div>
        </div>
      )}
    </InView>
  );
};
