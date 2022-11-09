import icon from "../../images/arrow-down-line-svgrepo-com.svg";

export const OurApabilities = () => {
  return (
    <div className="apabilities">
      <div className="content">
        <div className="headline">
          <h5>Our Capabilities</h5>
        </div>
        <div className="accordion">
          <div>
            <h3>Web & mobile apps</h3>
            <span>
              <img style={{ color: "white" }} src={icon} alt="" />
            </span>
          </div>
          <div>
            <h3>UX & product design</h3>
            <span>
              <img style={{ color: "white" }} src={icon} alt="" />
            </span>
          </div>
          <div>
            <h3>Product development</h3>
            <span>
              <img style={{ color: "white" }} src={icon} alt="" />
            </span>
          </div>
          <div>
            <h3>Award-class web design</h3>
            <span>
              <img style={{ color: "white" }} src={icon} alt="" />
            </span>
          </div>
          <div>
            <h3>Communication design</h3>
            <span>
              <img style={{ color: "white" }} src={icon} alt="" />
            </span>
          </div>
        </div>
        <div className="big-cricles">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
