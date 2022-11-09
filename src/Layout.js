import { Outlet } from "react-router-dom";
import { Footer, Navigation } from "./component";

export const Layout = () => {
  return (
    <>
      <Navigation />
      <main className="home-page">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
