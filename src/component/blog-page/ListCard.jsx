import { Card } from "../home-pgae/Card";

export const ListCard = (props) => {
  return (
    <div>
      <div className="special-card">
        <div className="hover-container">
          <div className="img-container">
            <img src={props.specialUrl} alt="" />
          </div>
          <span>
            <h1>{props.specialHeadline}</h1>
            <div>
              <p>{props.specialMin}</p>
              <p>{props.specialType}</p>
            </div>
          </span>
        </div>
      </div>
      <div className="insights-list">
        {props.allCardList?.map((el, i) => (
          <Card key={i} {...el} />
        ))}
      </div>
    </div>
  );
};
