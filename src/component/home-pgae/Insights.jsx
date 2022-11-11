import { InsightsLists } from "../../datas";

export const Insights = () => {
  return (
    <div className="insights-content">
      <div className="head-row">
        <h1>Insights</h1>
        <p>Read Our Blog</p>
      </div>
      <div className="insights-list">
        {InsightsLists.map(({ url, text, min, type }, i) => (
          <div key={i} className="list">
            <img src={url} alt="" />
            <p>{text}</p>
            <span className="duration">
              <span>{min}</span>
              <span>{type}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
