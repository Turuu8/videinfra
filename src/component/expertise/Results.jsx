import { ComapnyLogosItems } from "../../utils";
import { Discription } from "../career-page/Discription";
import { Personintroduction } from "../company-page/Personintroduction";

export const Results = (props) => {
  return (
    <div className="discription-section">
      <div className="container-result">
        {props.first.map((el, i) => (
          <Discription key={i} {...el} page={"result-discription"} />
        ))}
        <div className="review"></div>
      </div>
      <Personintroduction news={props.data} black={"black"} />
      <div className="company-logos">
        {ComapnyLogosItems.map((el, i) => (
          <div key={i}>
            <img src={el.url} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};
