import plus from "../../images/plus.black.svg";

export const CompanyCards = (props) => {
  let href = window.location.href.split("//")[1].split("/")[1];
  return (
    <div className="home-page-company-carts">
      {props.data.map(({ logoUrl, name, number, textOne, textTwo }, i) => (
        <div
          key={i}
          className="cart"
          style={
            href === "company"
              ? { backgroundColor: "#cdcecf" }
              : href === "expertise"
              ? { backgroundColor: "#eaebeb" }
              : {}
          }
        >
          <img src={logoUrl} alt="" />
          <p>{name}</p>
          <span className="text">
            <span>{textOne}</span>
            <span>{textTwo}</span>
          </span>
          <h3 className="number">{number}</h3>
          <div className="btn-add">
            <div
              style={
                href === "company"
                  ? { backgroundColor: "#bcbebf" }
                  : href === "expertise"
                  ? { backgroundColor: "#fff" }
                  : {}
              }
            >
              <img src={plus} alt="" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
