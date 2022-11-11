import { HeadlineChooseBtn, ListCard } from "../../component";

export const BlogPage = () => {
  return (
    <div className="blog-page" >
      <section className="headline-choose_btn-section">
        <HeadlineChooseBtn />
      </section>
      <section className="list-cards">
        <ListCard />
      </section>
      <section></section>
      <section></section>
      <section></section>
    </div>
  );
};