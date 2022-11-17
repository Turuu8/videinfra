export const CompanyCards = (props) => {
  let href = window.location.href.split("//")[1].split("/")[1];
  console.log(href);
  return (
    <div className="home-page-company-carts">
      {props.data.map(({ logoUrl, name }, i) => (
        <div
          key={i}
          className="cart"
          style={href === "company" ? { backgroundColor: "#cdcecf" } : {}}
        >
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
  );
};
