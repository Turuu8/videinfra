import React, { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import { Test } from "./Test";
import useLocoScroll from "./useLocoScroll";
import { Test1 } from "./Test1";
import { Test2 } from "./Test2";
import { Test3 } from "./Test3";
gsap.registerPlugin(ScrollTrigger);

export const Demo = () => {
  const [preloeader, setPreleader] = useState(true);

  useLocoScroll(!preloeader);

  const [time, setTime] = useState(2);
  const id = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreleader(false);
  };
  useEffect(() => {
    id.current = window.setInterval(() => {
      setTime((timer) => timer - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (time === 0) {
      clear();
    }
  }, [time]);

  return (
    <>
      <div
        style={
          !preloeader
            ? { backgroundColor: "#000", color: "#fff" }
            : { backgroundColor: "#fff", color: "#000", height: "100vh" }
        }
        className="demo"
      >
        {!preloeader ? (
          <div
            style={{
              width: "100%",
            }}
            className="main-container"
            data-scroll-container
          >
            <Test />
            <Test1 />
            <Test2 />
            <Test3 />
          </div>
        ) : (
          <h1
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            world
          </h1>
        )}
      </div>
      {/* <div className="demo">
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
        </Tween> */}
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
      {/* </div> */}
    </>
  );
};
