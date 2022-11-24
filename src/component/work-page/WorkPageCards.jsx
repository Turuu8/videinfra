import plus from "../../images/plus-white.svg";

export const WorkPageCards = (props) => {
  return (
    <div className="work-page-card-container">
      <div className="card-image">
        <img src={props.workImg} alt="" />
        <div className="plus">
          <img src={plus} alt="" />
        </div>
      </div>
      <h2>
        <p>{props.workHeadText}</p>
        <p>{props.workBottonText}</p>
      </h2>
    </div>
  );
};
