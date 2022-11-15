import { Card } from "../home-pgae/Card";

export const ListCard = (props) => {
  return (
    <div>
      <div className="special-card">
        <img src={props.specialUrl} alt="" />
        <span>
          <h1>{props.specialHeadline}</h1>
          <div>
            <p>{props.specialMin}</p>
            <p>{props.specialType}</p>
          </div>
        </span>
      </div>
      <div className="insights-list">
        {props.allCardList?.map((el, i) => (
          <Card key={i} {...el} />
        ))}
      </div>
    </div>
  );
};
