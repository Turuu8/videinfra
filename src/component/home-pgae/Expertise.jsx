import { TextButtom } from "../ui/Buttom";
import { WorkPageCards } from "../ui/WorkCards";

export const Expertise = (props) => {
  return (
    <div className="container-expertise">
      <div className="top-row">
        <div className="learn-more">
          <div className="items">
            <div className="num">
              <p>{props.number.num}</p>
            </div>
            <TextButtom text="Learn More" path={`/expertise/${props.type}`} />
          </div>
        </div>
        <div className="headline">
          <h2>{props.headlineTop}</h2>
          <p>{props.headlineBottom}</p>
        </div>
      </div>
      <div className="bottom-works">
        {props.name?.slice(0, 2).map((el, ind) => (
          <WorkPageCards key={ind} {...el} />
        ))}
      </div>
    </div>
  );
};
