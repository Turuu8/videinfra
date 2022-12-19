import { useState } from "react";
import { HeadlineChooseBtn, JumpHomePageText, LeaveEmail, ListCard } from "../component";

export const BlogPage = () => {
  const [clicked, setClicked] = useState("");
  console.log(AllCardList[0].allCardList.filter((p) => p.type === clicked));
  console.log(clicked);
  return (
    <div className="blog-page">
      <section className="headline-choose_btn-section">
        {headlineChooseBtnLists.map((el, i) => (
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

const headlineChooseBtnLists = [
  {
    title: "Insights",
    btns: [
      {
        btnText: "All Posts",
      },
      {
        btnText: "News",
      },
      {
        btnText: "Awards",
      },
      {
        btnText: "UX design",
      },
      {
        btnText: "Telecom",
      },
      {
        btnText: "eCommerce",
      },
      {
        btnText: "Luxury",
      },
      {
        btnText: "Real estate",
      },
      {
        btnText: "Strategy",
      },
      {
        btnText: "Marketplaces",
      },
    ],
  },
];

const AllCardList = [
  {
    specialUrl:
      "https://videinfra.com/assets/images/media/blog/red-dot-awards/preview-large@xxxl.webp",
    specialHeadline: "Two Vide Infra Products Win Prestigious Red Dot Design Award",
    specialMin: "1 min",
    specialType: "News, Awards",
    allCardList: [
      {
        url: "https://videinfra.com/assets/images/media/blog/marketplace/preview@xs.webp",
        text: "How to Build an Online Marketplace: A Complete Guide",
        min: "11 min",
        type: "UX design, Marketplaces, eCommerce",
      },
      {
        url: "https://videinfra.com/assets/images/media/blog/sylius-or-magento/preview@xs.webp",
        text: "Sylius vs Magento: What to Choose As Your eCommerce Platform ?",
        min: "6 min",
        type: "eCommerce",
      },
      {
        url: "https://videinfra.com/assets/images/media/blog/niche-marketplaces/preview@xs.webp",
        text: "Why Niche Marketplaces Are the Future?",
        min: "7 min",
        type: "Marketplaces, eCommerce",
      },
      {
        url: "https://videinfra.com/assets/images/media/blog/sylius-e-commerce/preview@xs.webp",
        text: "Sylius eCommerce Platform — Why Choose It?",
        min: "8 min",
        type: "eCommerce",
      },
      {
        url: "	https://videinfra.com/assets/images/media/blog/ecommerce-experience/preview@xs.webp",
        text: "11 Steps to Improve Your eCommerce User Experience",
        min: "14 min",
        type: "UX design, eCommerce",
      },
      {
        url: "https://videinfra.com/assets/images/media/blog/telecom-design/preview@xs.webp",
        text: "Case Study: Telecom Website UX Design",
        min: "11 min",
        type: "UX design, Telecom",
      },
      {
        url: "https://videinfra.com/assets/images/media/blog/site-conversion/preview@xs.webp",
        text: "Case Study: eCommerce UX design — 10 steps to increase conversion rates by 25%",
        min: "14 min",
        type: "eCommerce, UX design",
      },
      {
        url: "https://videinfra.com/assets/images/media/blog/luxury-ecommerce/preview@xs.webp",
        text: "Luxury eCommerce: UX best practices and a case study",
        min: "13 min",
        type: "eCommerce, UX design, Luxury",
      },
      {
        url: "https://videinfra.com/assets/images/media/blog/cssda-2021/preview@xs.webp",
        text: "We are thrilled to be nominated for the Agency of the Year by the CSS Design Awards",
        min: "2 min",
        type: "News",
      },
      {
        url: "https://videinfra.com/assets/images/media/blog/real-estate/preview@xs.webp",
        text: "Luxury real estate website design",
        min: "14 min",
        type: "Real estate, Strategy, Luxury",
      },
      {
        url: "https://videinfra.com/assets/images/media/blog/guide-for-interview/preview@xs.webp",
        text: "How to start a corporate website development project — collect the right requirements the right way",
        min: "6 min",
        type: "Strategy",
      },
      {
        url: "https://videinfra.com/assets/images/media/blog/allawards/preview@xs.webp",
        text: "New videinfra.com wins three international web design awards",
        min: "1 min",
        type: "News",
      },
      {
        url: "https://videinfra.com/assets/images/media/blog/awwwards/preview@xs.webp",
        text: "Awwwards nominate Vide Infra for the Studio Of The Year",
        min: "1 min",
        type: "News",
      },
      {
        url: "https://videinfra.com/assets/images/media/blog/runeta/preview@xs.webp",
        text: "Four prizes for our work at the Rating Runeta Awards '19",
        min: "1 min",
        type: "News",
      },
      {
        url: "https://videinfra.com/assets/images/media/blog/jayasom/preview@xs.webp",
        text: "How it's made: interview with Communication Arts about Jayasom website",
        min: "1 min",
        type: "News",
      },
      {
        url: "https://videinfra.com/assets/images/media/blog/runeta/preview@xs.webp",
        text: "Vide Infra is among the best 10 creative web developers in Rating Runeta's report",
        min: "1 min",
        type: "News",
      },
      {
        url: "https://videinfra.com/assets/images/media/blog/cssda/preview@xs.webp",
        text: "Vide Infra nominated for the Agency of the Year 2017 by CSSDA",
        min: "2 min",
        type: "News",
      },
      {
        url: "https://videinfra.com/assets/images/media/blog/cssda-vig/preview@xs.webp",
        text: "Vide Infra’s art director is the new CSS Design Awards judge",
        min: "2 min",
        type: "News",
      },
      {
        url: "https://videinfra.com/assets/images/media/blog/cssda-vig/preview@xs.webp",
        text: "How we approached our own website redesign",
        min: "2 min",
        type: "News",
      },
    ],
  },
];
