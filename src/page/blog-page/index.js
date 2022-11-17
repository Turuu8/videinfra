import { useState } from "react";
import {
  HeadlineChooseBtn,
  JumpHomePageText,
  LeaveEmail,
  ListCard,
} from "../../component";
import { AllCardList, HeadlineChooseBtnLists } from "../../datas/blog-page";

export const BlogPage = () => {
  const [clicked, setClicked] = useState("")
  console.log(AllCardList[0].allCardList.filter(p => p.type === clicked))
  console.log(clicked)
  return (
    <div className="blog-page">
      <section className="headline-choose_btn-section">
        {HeadlineChooseBtnLists.map((el, i) => (
          <HeadlineChooseBtn key={i} {...el} setClicked={setClicked} />
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
