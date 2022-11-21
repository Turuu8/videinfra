import { useState } from "react";
import { NavigationLists } from "../datas";
import icon from "../images/icon-upward.svg";
import menu from "../images/two-line-menu.svg";

export const Navigation = () => {
  let href = window.location.href.split("//")[1].split("/")[1];
  const [title, setTitle] = useState("Expertise");
  const handClick = (e) => {
    console.log(e.target);
  };
  return (
    <div
      style={{
        backgroundColor:
          href === "blog"
            ? "#fff"
            : href === "work"
            ? "#fff"
            : href === "expertise"
            ? "#fff"
            : "#cdcecf",
      }}
      className="navigation"
    >
      <div className="full">
        <div className="header-content">
          <div className="logo">
            <a href="/">
              <span>Vide Infra</span>
            </a>
          </div>
          <div className="link-btn">
            <div className="type-names"></div>
            <div className="white-full">
              <div>
                <a
                  href="/expertise/digital-products-and-services"
                  value="Digital Products & Services"
                  onClick={(e) => handClick(e)}
                >
                  Digital Products & Services
                </a>
                <a
                  href="/expertise/ecommerce"
                  value="eCommerce"
                  onClick={(e) => handClick(e)}
                >
                  eCommerce
                </a>
                <a
                  href="/expertise/corporate-websites"
                  value="Corporate Websites"
                  onClick={(e) => handClick(e)}
                >
                  Corporate Websites
                </a>
                <a
                  href="/expertise/brand-and-communication"
                  value="Brand & Communication"
                  onClick={(e) => handClick(e)}
                >
                  Brand & Communication
                </a>
              </div>
            </div>
            <span>{title}</span>
            <div
              style={{
                backgroundColor:
                  href === "blog"
                    ? "#eaebeb"
                    : href === "work"
                    ? "#eaebeb"
                    : href === "expertise"
                    ? "#eaebeb"
                    : "#bbbcbd",
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
    </div>
  );
};
