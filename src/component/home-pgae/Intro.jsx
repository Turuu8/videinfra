import { InView } from "react-intersection-observer";

export const Intro = () => {
  return (
    <>
      <InView threshold="0" triggerOnce>
        {({ inView, ref }) => (
          <>
            <div ref={ref} className="headline-word">
              <div>
                <h1
                  style={{
                    transform: inView ? "translateY(0)" : "translateY(100%)",
                  }}
                >
                  Design. <span>Development.</span>
                </h1>
              </div>
              <div>
                <h1
                  style={{
                    transform: inView ? "translateY(0)" : "translateY(100%)",
                  }}
                >
                  Mastership.
                </h1>
              </div>
            </div>
            <div className="bottom-row">
              <div className="cricles">
                <div>
                  <noscript>cricle</noscript>
                </div>
                <div>
                  <noscript>cricle</noscript>
                </div>
                <div>
                  <noscript>cricle</noscript>
                </div>
              </div>
              <div
                style={{
                  transform: inView ? "translateY(0)" : "translateY(200%)",
                  lineHeight: inView ? "1.2em" : "3em",
                }}
                className="leading-text"
              >
                <span>
                  We design and develop exceptional digital products & services,
                  eCommerce, and brand communication solutions.
                </span>
              </div>
              <div
                style={{
                  background: inView
                    ? "linear-gradient(transparent 10% , #cdcecf 40%)"
                    : "linear-gradient(transparent 10% , #cdcecf 80% )",
                  transform: inView ? "translateY(100%)" : "translateY(-50%)",
                  height: inView ? "100%" : "500%",
                }}
                className="leading-text-animation-support"
              ></div>
            </div>
          </>
        )}
      </InView>
    </>
  );
};
