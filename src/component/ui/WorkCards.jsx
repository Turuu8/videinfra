import { useNavigate } from "react-router-dom";
import { useContextPath } from "../../context/VariableContext";
import plus from "../../assets/images/plus-white.svg";

export const WorkPageCards = (props) => {
  const { setPath, setDetail } = useContextPath();
  const navigate = useNavigate();
  const handle = () => {
    setPath((prev) => {
      return (prev = props.type);
    });
    navigate(`/work/${props.type}`);
    setDetail(props.detail);
  };
  return (
    <button onClick={() => handle()} className="work-page-card-container">
      <div className="card-image">
        <div className="img-container">
          <img src={props.workImg} alt="" />
        </div>
        <div className="plus">
          <div className="top">
            <img src={plus} alt="" />
          </div>
          <div className="bottom">
            <img src={plus} alt="" />
          </div>
        </div>
      </div>
      <h2>
        <p>{props.workHeadText}</p>
        <p>{props.workBottonText}</p>
      </h2>
    </button>
  );
};
