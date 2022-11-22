import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Demo } from "./component/Demo";
import { Layout } from "./Layout";
import {
  BlogPage,
  BrandCommunication,
  CareerPage,
  CompanyPage,
  ContactPage,
  CorporateWebsites,
  DigitalProductsServices,
  ECommercePage,
  HomePage,
  WorkPage,
} from "./page";

export const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/demo" element={<Demo />} />
          <Route
            path="/expertise/digital-products-and-services"
            element={<DigitalProductsServices />}
          />
          <Route path="/expertise/ecommerce" element={<ECommercePage />} />
          <Route
            path="/expertise/corporate-websites"
            element={<CorporateWebsites />}
          />
          <Route
            path="/expertise/brand-and-communication"
            element={<BrandCommunication />}
          />
          <Route />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
