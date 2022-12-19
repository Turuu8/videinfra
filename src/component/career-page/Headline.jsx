import { InView } from "react-intersection-observer";
import downLine from "../../assets/images/downLine-white.svg";

export const Headline = (props) => {
  return (
    <InView threshold="0" triggerOnce>
      {({ inView, ref }) => (
        <div className={props.page}>
          <div className="container">
            <h1
              style={{
                transform: inView ? "translateY(0)" : "translateY(100%)",
                opacity: inView ? "1" : "0",
              }}
              ref={ref}
            >
              {props.title}
            </h1>
          </div>
          <div className="container">
            <h2
              style={{
                transform: inView ? "translateY(0)" : "translateY(100%)",
                opacity: inView ? "1" : "0",
              }}
              ref={ref}
            >
              {props.secondTitle}
            </h2>
          </div>
          <button
            ref={ref}
            style={{
              transform: inView ? "translateY(0)" : "translateY(80px)",
              opacity: inView ? "1" : "0",
            }}
          >
            <img src={downLine} alt="" />
          </button>
        </div>
      )}
    </InView>
  );
};
