import { Outlet } from "react-router-dom";
import { Footer, Navigation } from "./component";

export const Layout = () => {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
