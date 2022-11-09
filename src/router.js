import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { HomePage, WorkPage } from "./page";

export const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
