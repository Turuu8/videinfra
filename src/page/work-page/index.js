import {
  HeadlineChooseBtn,
  JumpHomePageText,
  WorkPageCards,
} from "../../component";
import {
  WorkPageCardItens,
  WorkPageHeadelineChooseBtns,
} from "../../datas/work-page";
export const WorkPage = () => {
  return (
    <div className="work-page">
      <section className="headline-choose_btn-section">
        {WorkPageHeadelineChooseBtns.map((el, i) => (
          <HeadlineChooseBtn key={i} {...el} />
        ))}
      </section>
      <section className="work-cards-section">
        {WorkPageCardItens.map((el, i) => (
          <WorkPageCards key={i} {...el} />
        ))}
      </section>
      <JumpHomePageText props="Work" />
    </div>
  );
};
