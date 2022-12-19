import { Discription, Headline, JumpHomePageText, Vacancies } from "../component";

export const CareerPage = () => {
  return (
    <div className="career-page">
      <section className="headline-section">
        {CareerPageList.map((el, i) => (
          <Headline key={i} {...el} page={"content-headline"} />
        ))}
      </section>
      <section className="discription-section">
        {CareerPageTextItems.map((el, i) => (
          <Discription key={i} {...el} page={"content-discription"} />
        ))}
      </section>
      <section className="vacancies-section">
        <Vacancies />
        <JumpHomePageText props={"Career"} />
      </section>
    </div>
  );
};

const CareerPageList = [{ title: "Career" }];
const CareerPageTextItems = [
  {
    headTop: "Join our team",
    headBotton: "and create great products",
    detail:
      "Delivering great work is at the heart of what we do at Vide Infra. We push a bar a bit higher with every project to create new challenges to stay on top of our craft. We value trust, freedom, passion, warm and friendly relationships, and we enjoy our time together a lot. If this resonates with your vision, we would be very willing to chat about how we can work together. Get in touch today!",
  },
];
