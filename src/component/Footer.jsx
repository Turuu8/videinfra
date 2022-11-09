import { FooterLinks } from "../datas";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-footer">
        <div className="footer-items">
          <div className="top-row">
            <div className="logo">
              <span>Vide Infra</span>
            </div>
            <div className="links">
              {FooterLinks.map(({ item }, i) => (
                <a key={i} href="/">
                  <span>{item}</span>
                </a>
              ))}
            </div>
            <div className="btn-content">
              <span>Download Presentation</span>
              <span>Get In Touch</span>
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
