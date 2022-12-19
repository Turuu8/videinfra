import { useNavigate } from "react-router-dom";
import { useContextPath } from "../../context/VariableContext";

export const Card = (props) => {
  const { setBlog, setBlogDetail } = useContextPath();
  const navigate = useNavigate();
  const handle = () => {
    setBlog((prev) => {
      return (prev = props.text);
    });
    navigate(`/blog/${props.text}`);
    setBlogDetail(props.detail);
  };
  return (
    <button onClick={() => handle()} className="card-list">
      <div className="img-card-container">
        <img src={props.url} alt="" />
      </div>
      <p>{props.text}</p>
      <span className="duration">
        <span>{props.min}</span>
        <span>{props.type}</span>
      </span>
    </button>
  );
};
