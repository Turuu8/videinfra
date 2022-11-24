import React from "react";
import { ArrowRL } from "./ArrowRL";
import quotesB from "../../images/double-quotes-B.svg";
import quotesW from "../../images/double.quotes-W.svg";

export const Personintroduction = (props) => {
  return (
    <>
      {props.news.map((el, i) => (
        <div key={i} className="compnay-page-row-pad-reviews">
          <div className="container">
            <div>
              {props.black === "black" ? (
                <img src={quotesB} alt="" />
              ) : (
                <img src={quotesW} alt="" />
              )}
            </div>
            <ArrowRL props={props.black} />
          </div>
          <div className="review-text">
            <p>{el.word}</p>
            <div className="avatar">
              <img src={el.propUrl} alt="" />
              <div>
                <h4>{el.name}</h4>
                <h4>{el.profession}</h4>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
