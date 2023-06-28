import { useState } from "react";
import { Link } from "react-router-dom";
import { NavigationLists } from "../../utils";
import icon from "../../assets/images/icon-upward.svg";
import menu from "../../assets/images/two-line-menu.svg";

export const Navigation = () => {
  let href = window.location.href.split("//")[1].split("/")[1];
  const [title, setTitle] = useState("Expertise");
  const [click, setClick] = useState(false);
  const handClick = (e) => {
    setTitle(e.currentTarget.textContent);
    setClick(true);
    setTimeout(() => {
      setClick(false);
      console.log(click);
    }, 1000);
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
              <span>Mandhari</span>
            </a>
          </div>
          <div className="link-btn">
            <div className="type-names"></div>
            <div
              className="white-full"
              style={
                click
                  ? {
                      top: "-100vh",
                    }
                  : {}
              }
            >
              <div>
                <Link to="/expertise/digital-products-and-services" onClick={(e) => handClick(e)}>
                  Digital Products & Services
                </Link>
                <Link to="/expertise/ecommerce" onClick={(e) => handClick(e)}>
                  eCommerce
                </Link>
                <Link to="/expertise/corporate-websites" onClick={(e) => handClick(e)}>
                  Corporate Websites
                </Link>
                <Link to="/expertise/brand-and-communication" onClick={(e) => handClick(e)}>
                  Brand & Communication
                </Link>
              </div>
              <div className="img" />
            </div>
            <span
              style={{
                color: "#000",
              }}
            >
              {title}
            </span>
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
