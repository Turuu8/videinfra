export const Expertise = (props) => {
  return (
    <div className="container-expertise">
      <div className="top-row">
        <div className="learn-more">
          <div className="items">
            <div>
              <p>{props.num}</p>
            </div>
            <span>Learn More</span>
          </div>
        </div>
        <div className="headline">
          <h2>{props.headlineTop}</h2>
          <p>{props.headlineBottom}</p>
        </div>
      </div>
      <div className="bottom-works">
        <div className="art">
          <img width="100%" src={props.workOneUrl} alt="" />
          <p className="space">{props.workOneTextHead}</p>
          <p className="type-art">{props.workOneText}</p>
        </div>
        <div>
          <img width="100%" src={props.workTwoUrl} alt="" />
          <p className="space">{props.workTwoTextHead}</p>
          <p className="type-art">{props.workTwoText}</p>
        </div>
      </div>
    </div>
  );
};
