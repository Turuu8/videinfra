import downLine from "../../images/downLine-white.svg";

export const Headline = (props) => {
  return (
    <div className="content-headline">
      <h1
        style={{
          fontSize: props.Size,
          color: props.color,
          letterSpacing: props.pad,
          height: props.height,
        }}
      >
        {props.title}
      </h1>
      {props.downTitle === undefined ? (
        ""
      ) : (
        <h1
          style={{
            fontSize: props.Size,
            letterSpacing: props.pad,
          }}
        >
          {props.downTitle}
        </h1>
      )}
      <button>
        <img src={downLine} alt="" />
      </button>
    </div>
  );
};
