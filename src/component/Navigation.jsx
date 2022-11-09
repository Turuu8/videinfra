import icon from "../images/icon-upward.svg";

export const Navigation = () => {
  return (
    <div className="navigation">
      <div className="header-row">
        <div className="logo">
          <span>Vide Infra</span>
        </div>
        <div className="link-btn">
          <div className="hover-above-text" data-text="Expertise">
            <span>Expertise</span>
          </div>
          {/* <div className="hover-below-text">Expertise</div> */}
          <div className="hover-icon">
            <img src={icon} alt="" />
          </div>
        </div>
        <div className="list">
          <ul>
            {lists.map(({ title }, i) => (
              <li key={i}>
                <a href="/work" data-text={title}>
                  <span>{title}</span>
                  {/* <div>{title}</div> */}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const lists = [
  { title: "Work" },
  { title: "Company" },
  { title: "Blog" },
  { title: "Career" },
  { title: "Contact" },
];
