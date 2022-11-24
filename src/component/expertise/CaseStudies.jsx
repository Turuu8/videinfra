import { ArrowRL } from "../company-page/ArrowRL";
import { WorkPageCards } from "../work-page/WorkPageCards";

export const CaseStudies = (props) => {
  return (
    <>
      <div className="container">
        <div className="headline">
          <h1>Case Studies</h1>
          <div className="case-studies-buttons">
            <a href="/work">All Works</a>
            <ArrowRL />
          </div>
        </div>
        <div className="cards">
          {props.json.map((el, i) => (
            <WorkPageCards key={i} {...el} />
          ))}
        </div>
      </div>
    </>
  );
};
