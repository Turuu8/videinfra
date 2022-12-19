import { Link } from "react-router-dom";
import { FooterLinks } from "../../utils";
import { TextButtom } from "./Buttom";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-footer">
        <div className="footer-items">
          <div className="top-row">
            <div className="logo">
              <a href="/">
                <span>Vide Infra</span>
              </a>
            </div>
            <div className="links">
              {FooterLinks.map(({ item }, i) => (
                <a key={i} href="/">
                  <span>{item}</span>
                </a>
              ))}
            </div>
            <div className="btn-content">
              <TextButtom text="Download Presentation" />
              <div className="hover one">
                <Link className="top">Get In Touch</Link>
                <Link className="bottom">Get In Touch</Link>
              </div>
            </div>
          </div>
          <div className="bottom-row">
            <div>
              <span>© 1998–2022</span>
            </div>
            <div>
              <span>Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
