import React from "react";

export const DirectorPeople = (props) => {
  return (
    <div>
      <div>
        <img src={props.PersonImage} alt="" />
      </div>
      <div>
        <p>{props.Name}</p>
        <p>{props.profession}</p>
      </div>
    </div>
  );
};
