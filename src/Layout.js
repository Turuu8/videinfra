import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Footer, Navigation } from "./component";

export const Layout = () => {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <Navigation />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};
