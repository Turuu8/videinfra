import React from "react";
import {
  CompanyPageClientTileItems,
  CompanyPageOurClientItems,
  PersonIntroductionItem,
} from "../../utils/company-page";
import { Discription } from "../career-page/Discription";
import { ClientTile } from "./ClientTile";
import { Personintroduction } from "./Personintroduction";

export const OurClientContent = () => {
  return (
    <>
      <div className="discription-section">
        {CompanyPageOurClientItems.map((el, i) => (
          <Discription key={i} {...el} page={"company-discription"} />
        ))}
        <div className="content-client-tile">
          {CompanyPageClientTileItems.map((el, i) => (
            <ClientTile key={i} {...el} />
          ))}
        </div>
      </div>
      <Personintroduction news={PersonIntroductionItem} />
    </>
  );
};
