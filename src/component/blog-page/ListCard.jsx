import React from "react";
import { AllCardList } from "../../datas/blog-page";
import { Card } from "../home-pgae/Card";

export const ListCard = () => {
  return (
    <div className="insights-list">
      {AllCardList.map((el, i) => (
        <Card key={i} {...el} />
      ))}
    </div>
  );
};
