import icon from "../../images/icon-upward.svg";

export const Company = () => {
  return (
    <div className="company-content">
      <div className="head-row">
        <h2>Company</h2>
        <span>
          We are a strategic partner to our clients. We will help you to ideate,
          design and implement your product from conception to iterative
          development support, always taking the initiative and working
          proactively.
        </span>
      </div>
      <div className="years">
        <div>
          <p>20+</p>
          <p>Years of experience</p>
        </div>
      </div>
      <div className="about-as">
        <div>
          <span>More About Us</span>
        </div>
      </div>
      <div className="btn-cart">
        <button>
          <img src={icon} alt="" />
        </button>
        <button>
          <img src={icon} alt="" />
        </button>
      </div>
      <div className="carts">
        {cartsItems.map(({ logoUrl, name }, i) => (
          <div key={i} className="cart">
            <img src={logoUrl} alt="" />
            <p>{name}</p>
            <div className="btn-add">
              <div>
                <img src="https://www.svgrepo.com/show/77168/plus.svg" alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const cartsItems = [
  {
    logoUrl: "https://videinfra.com/assets/images/media/clients/ba.svg",
    name: "British Airways",
  },
  {
    logoUrl: "https://videinfra.com/assets/images/media/clients/bite.svg",
    name: "Bite",
  },
  {
    logoUrl: "https://videinfra.com/assets/images/media/clients/airbaltic.svg",
    name: "airBaltic",
  },
  {
    logoUrl: "https://videinfra.com/assets/images/media/clients/dnb.svg",
    name: "DNB",
  },
  {
    logoUrl: "https://videinfra.com/assets/images/media/clients/dnb.svg",
    name: "GE Money Bank",
  },
  {
    logoUrl: "https://videinfra.com/assets/images/media/clients/seb.svg",
    name: "SEB",
  },
  {
    logoUrl: "https://videinfra.com/assets/images/media/clients/ablv.svg",
    name: "ABLV",
  },
];
