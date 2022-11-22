import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

export default function useLocoScroll(start) {
  useEffect(() => {
    if (!start) return;

    const scrollEl = document.querySelector("#home");
    const locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1,
      class: "is-view",
    });
    console.log("time");
  }, [start]);
}
