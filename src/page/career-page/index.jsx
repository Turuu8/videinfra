import {
  Discription,
  Headline,
  JumpHomePageText,
  Vacancies,
} from "../../component";
import { CareerPageList, CareerPageTextItems } from "../../datas";

export const CareerPage = () => {
  return (
    <div className="career-page">
      <section className="headline-section">
        {CareerPageList.map((el, i) => (
          <Headline key={i} {...el} />
        ))}
      </section>
      <section className="discription-section">
        {CareerPageTextItems.map((el, i) => (
          <Discription key={i} {...el} />
        ))}
      </section>
      <section className="vacancies-section">
        <Vacancies />
        <JumpHomePageText props={"Career"} />
      </section>
    </div>
  );
};
