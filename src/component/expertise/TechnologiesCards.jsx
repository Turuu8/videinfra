import { ExpertiseCardItems } from "../../datas";
import { ArrowRL } from "../company-page/ArrowRL";
import { CompanyCards } from "../home-pgae/CompanyCards";

export const TechnologiesCards = () => {
  return (
    <>
      <div className="arrow-r-l">
        <ArrowRL />
      </div>
      <div className="container-cards">
        <CompanyCards data={ExpertiseCardItems} />
      </div>
    </>
  );
};
