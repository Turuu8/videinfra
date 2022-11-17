import React from "react";

export const HeadlineChooseBtn = (props) => {
  const Handle = (e) => {
    props.setClicked(e.target.value);
  };
  return (
    <div>
      <h1
        className="headline"
        style={{
          fontSize: props.fontSize,
        }}
      >
        {props.title}
      </h1>
      <div className="choose_btn">
        {props.btns.map((el, i) => (
          <button key={i} value={el.btnText} onClick={(e) => Handle(e)}>
            {el.btnText}
          </button>
        ))}
      </div>
    </div>
  );
};
