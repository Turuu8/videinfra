import React from "react";
import {
  CompanyPageClientTileItems,
  CompanyPageOurClientItems,
} from "../../datas/company-page";
import { Discription } from "../career-page/Discription";
import { ClientTile } from "./ClientTile";
import { ArrowRL } from "./ArrowRL";

export const OurClientContent = () => {
  return (
    <>
      <div className="discription-section">
        {CompanyPageOurClientItems.map((el, i) => (
          <Discription key={i} {...el} />
        ))}
        <div className="content-client-tile">
          {CompanyPageClientTileItems.map((el, i) => (
            <ClientTile key={i} {...el} />
          ))}
        </div>
      </div>
      <div className="row-pad-reviews">
        <div className="container">
          <div></div>
          <ArrowRL />
        </div>
        <div className="review-text">
          <p>
            Working with Vide Infra was a true pleasure. With the help of Anton
            and his team of professionals we managed to go live with the first
            version of our intranet pages within weeks. Vide Infra understood
            exactly what we wanted and helped us make the right decisions
            regarding set-up, layout and structure. Our success was largely
            dependent on their involvement and commitment.
          </p>
          <div className="avatar">
            <img
              src="https://videinfra.com/assets/images/media/testimonials/dnb-john-taman@xs.webp"
              alt=""
            />
            <div>
              <h4>John Taman</h4>
              <h4>CTO, DnB Nord Group</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
