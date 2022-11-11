export const Card = (props) => {
  return (
    <div className="card-list">
      <img src={props.url} alt="" />
      <p>{props.text}</p>
      <span className="duration">
        <span>{props.min}</span>
        <span>{props.type}</span>
      </span>
    </div>
  );
};
