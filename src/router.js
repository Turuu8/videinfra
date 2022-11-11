import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { BlogPage, CareerPage, ContactPage, HomePage, WorkPage } from "./page";

export const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/company" element={<WorkPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
