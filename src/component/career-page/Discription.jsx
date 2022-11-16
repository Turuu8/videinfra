export const Discription = (props) => {
  return (
    <div className="content-discription">
      <div>
        <h5>
          <p>{props.headTop}</p>
          <p>{props.headBotton}</p>
        </h5>
        <span>{props.detail}</span>
      </div>
    </div>
  );
};
