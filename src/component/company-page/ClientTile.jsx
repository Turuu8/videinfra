import React from "react";

export const ClientTile = (props) => {
  return (
    <>
      <div className="company-page-client-image">
        <img src={props.url} alt="" />
      </div>
      <div style={{ gridArea: "1 / 4 / 2 / 5" }}></div>
      <div style={{ gridArea: "2 / 4 / 3 / 5" }}></div>
    </>
  );
};
