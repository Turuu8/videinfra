import { InsightsLists } from "../../utils";
import { TextButtom } from "../ui/Buttom";
import { Card } from "./Card";

export const Insights = () => {
  return (
    <div className="insights-content">
      <div className="head-row">
        <h1>Insights</h1>
        <TextButtom text="Read Our Blog" path="/blog" />
      </div>
      <div className="insights-list">
        {InsightsLists.map((el, i) => (
          <Card key={i} {...el} />
        ))}
      </div>
    </div>
  );
};
