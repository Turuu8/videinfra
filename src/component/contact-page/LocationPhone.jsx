import React from "react";
import { InView } from "react-intersection-observer";

export const LocationPhone = () => {
  return (
    <InView threshold="0" triggerOnce>
      {({ inView, ref }) => (
        <div className="top-border">
          <div
            ref={ref}
            style={{
              transform: inView ? "translateY(0)" : "translateY(90%)",
              opacity: inView ? "1" : "0",
              transition: "1s",
            }}
          >
            <h5>Riga</h5>
            <span>+371 29 44 76 69</span>
            <p>Avotu 9-6 Riga, LV-1011 Latvia</p>
          </div>
        </div>
      )}
    </InView>
  );
};
