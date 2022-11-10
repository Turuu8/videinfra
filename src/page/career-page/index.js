import { Discription, Headline, Vacancies } from "../../component";
import { CareerPageList } from "../../datas";

export const CareerPage = () => {
  return (
    <div className="career-page">
      <section className="headline-section">
        {CareerPageList.map((el, i) => (
          <Headline key={i} {...el} />
        ))}
      </section>
      <section className="discription-section">
        <Discription />
      </section>
      <section className="vacancies-section">
        <Vacancies />
      </section>
    </div>
  );
};
