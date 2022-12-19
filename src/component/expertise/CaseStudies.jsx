import { ArrowRL } from "../company-page/ArrowRL";
import { TextButtom } from "../ui/Buttom";
import { WorkPageCards } from "../ui/WorkCards";

export const CaseStudies = (props) => {
  return (
    <>
      <div className="container">
        <div className="headline">
          <h1>Case Studies</h1>
          <div className="case-studies-buttons">
            <TextButtom text="All Works" path="/" />
            {/* <a href="/work">All Works</a> */}
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
