import {
  HeadlineChooseBtn,
  JumpHomePageText,
  LeaveEmail,
  ListCard,
} from "../../component";
import { AllCardList, HeadlineChooseBtnLists } from "../../datas/blog-page";

export const BlogPage = () => {
  return (
    <div className="blog-page">
      <section className="headline-choose_btn-section">
        {HeadlineChooseBtnLists.map((el, i) => (
          <HeadlineChooseBtn key={i} {...el} />
        ))}
      </section>
      <section className="list-cards">
        {AllCardList.map((el, i) => (
          <ListCard key={i} {...el} />
        ))}
      </section>
      <JumpHomePageText props={"Blog"} />
      <section className="leave-email-section">
        <LeaveEmail />
      </section>
    </div>
  );
};
