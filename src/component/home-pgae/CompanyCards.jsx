export const CompanyCards = (props) => {
  let href = window.location.href.split("//")[1].split("/")[1];
  console.log(href);
  return (
    <div className="home-page-company-carts">
      {props.data.map(({ logoUrl, name, number }, i) => (
        <div
          key={i}
          className="cart"
          style={href === "company" ? { backgroundColor: "#cdcecf" } : {}}
        >
          <img src={logoUrl} alt="" />
          <p>{name}</p>
          <h3 className="number">{number}</h3>
          <div className="btn-add">
            <div
              style={href === "company" ? { backgroundColor: "#bcbebf" } : {}}
            >
              <img src="https://www.svgrepo.com/show/77168/plus.svg" alt="" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
