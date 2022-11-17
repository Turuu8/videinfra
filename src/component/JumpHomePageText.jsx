export const JumpHomePageText = (props) => {
  return (
    <div
      style={
        props.props === "Company"
          ? {
              color: "#cdcecf",
            }
          : {}
      }
      className="btn-home-page-jump"
    >
      <a
        style={
          props.props === "Company"
            ? {
                backgroundColor: "transparent",
                color: "#cdcecf",
              }
            : {}
        }
        href="/"
      >
        Homepage
      </a>{" "}
      &nbsp;/&nbsp; {props.props}
    </div>
  );
};
