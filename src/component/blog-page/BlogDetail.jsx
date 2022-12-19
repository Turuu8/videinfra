import React from "react";

export const BlogDetail = (props) => {
  console.log(props);
  return (
    <div>
      BlogDetail
      <h1>BlogDetail</h1>
      <h1>BlogDetail</h1>
      <h1>BlogDetail</h1>
      <h1>{props.txt1}</h1>
    </div>
  );
};
