import { HeadlineChooseBtn } from "../../component";
import { JumpHomePageText } from "../../component/JumpHomePageText";
import { WorkPageHeadelineChooseBtns } from "../../datas/work-page";
export const WorkPage = () => {
  return (
    <div className="work-page">
      <section className="headline-choose_btn-section">
        {WorkPageHeadelineChooseBtns.map((el, i) => (
          <HeadlineChooseBtn key={i} {...el} />
        ))}
      </section>
      <section>hello</section>
      <section>hello</section>
      <section>hello</section>
      <section>hello</section>
      <JumpHomePageText props="Work" />
    </div>
  );
};
