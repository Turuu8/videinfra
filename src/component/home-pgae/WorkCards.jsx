import React from "react";

export const WorkCards = ({ props }) => {
  return (
    <div className="bottom-works">
      <div className="art">
        <img width="100%" src={props.workOneUrl} alt="" />
        <p className="space">{props.workOneTextHead}</p>
        <p className="type-art">{props.workOneText}</p>
      </div>
      <div>
        <img width="100%" src={props.workTwoUrl} alt="" />
        <p className="space">{props.workTwoTextHead}</p>
        <p className="type-art">{props.workTwoText}</p>
      </div>
      <div className="plus">
        <img src="" alt="" />
      </div>
    </div>
  );
};
