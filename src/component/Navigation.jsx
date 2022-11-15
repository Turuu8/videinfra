import { NavigationLists } from "../datas";
import icon from "../images/icon-upward.svg";
import menu from "../images/two-line-menu.svg";

export const Navigation = () => {
  let href = window.location.href.split("//")[1].split("/")[1];
  return (
    <div
      style={{
        backgroundColor: href === "blog" ? "#fff" : "#cdcecf",
      }}
      className="navigation"
    >
      <div className="header-content">
        <div className="logo">
          <a href="/">
            <span>Vide Infra</span>
          </a>
        </div>
        <div className="link-btn">
          <span>Expertise</span>
          <div
            style={{
              backgroundColor: href === "blog" ? "#eaebeb" : "#bbbcbd",
            }}
            className="hover-icon"
          >
            <img src={icon} alt="" />
          </div>
        </div>
        <div className="list">
          <ul>
            {NavigationLists.map(({ title, path }, i) => (
              <li key={i}>
                <a href={path} data-text={title}>
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
