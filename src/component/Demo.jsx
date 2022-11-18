import React, { useEffect, useImperativeHandle, useRef, useState } from "react";
import { Tween } from "react-gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

export const Demo = () => {
  const triggerRef = useRef(null);
  //   const [trigger, setTrigger] = useState(triggerRef.current);
  //   useEffect(() => {
  //     setTrigger(triggerRef.current);
  //   }, []);
  const trigger = useRef(null);
  //   useImperativeHandle(ref, () => ({
  //     trigger,
  //   }));

  return (
    <>
      <div className="demo"></div>
      <div className="demo">
        <Tween
          from={
            {
              //   y: "70vh",
            }
          }
          to={{
            x: "900px",
            scrollTrigger: {
              trigger: ".square",
              start: "0 center",
              end: "500px center",
              scrub: 10,
              markers: true,
            },
          }}
        >
          <div
            className="square"
            style={{ width: "100px", height: "100px", background: "#ccc" }}
          />
        </Tween>
        {/* <ScrollTrigger trigger=".square"></ScrollTrigger> */}
        {/* <ScrollTrigger
           start="-200px center"
           end="200px center"
        scrub={0.5}
        markers
      >
        <Tween
          to={{
            x: "300px",
          }}
        >
          <div
            style={{ width: "100px", height: "100px", background: "#ccc" }}
          />
        </Tween>
        <Tween
          to={{
            x: "300px",
          }}
        >
          <div
            style={{ width: "100px", height: "100px", background: "#999" }}
          />
        </Tween>
      </ScrollTrigger> */}
      </div>
    </>
  );
};
