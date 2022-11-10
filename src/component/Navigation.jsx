import { NavigationLists } from "../datas";
import icon from "../images/icon-upward.svg";
import menu from "../images/two-line-menu.svg";

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
          <div className="hover-icon">
            <img src={icon} alt="" />
          </div>
        </div>
        <div className="list">
          <ul>
            {NavigationLists.map(({ title }, i) => (
              <li key={i}>
                <a href="/work" data-text={title}>
                  <span>{title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="menu">
          <img src={menu} alt="" />
        </div>
      </div>
    </div>
  );
};
