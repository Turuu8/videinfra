import { InsightsLists } from "../../datas";
import { Card } from "./Card";

export const Insights = () => {
  return (
    <div className="insights-content">
      <div className="head-row">
        <h1>Insights</h1>
        <p>Read Our Blog</p>
      </div>
      <div className="insights-list">
        {InsightsLists.map((el, i) => (
          <Card key={i} {...el} />
        ))}
      </div>
    </div>
  );
};
