import { Link } from "react-router-dom";

export const TextButtom = (props) => {
  return (
    <div className="text-buttom">
      <Link className="top" to={props.path}>
        {props.text}
      </Link>
      <Link className="bottom" to={props.path}>
        {props.text}
      </Link>
    </div>
  );
};
