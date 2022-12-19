import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BlogDetail, WorkCardDetail } from "./component";
import { useContextPath } from "./context/VariableContext";
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
  const { path, detail, blog, blogDetail } = useContextPath();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path={`/work/${path}`} element={<WorkCardDetail {...detail[0]} />} />
          <Route path={`/blog/${blog}`} element={<BlogDetail {...blogDetail[0]} />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/expertise/digital-products-and-services"
            element={<DigitalProductsServices />}
          />
          <Route path="/expertise/ecommerce" element={<ECommercePage />} />
          <Route path="/expertise/corporate-websites" element={<CorporateWebsites />} />
          <Route path="/expertise/brand-and-communication" element={<BrandCommunication />} />
          <Route />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
