import { HeadlineChooseBtn, JumpHomePageText, WorkPageCards } from "../component";

export const WorkPage = () => {
  return (
    <div className="work-page">
      <section className="headline-choose_btn-section">
        {headelineChooseBtnLists.map((el, i) => (
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

const headelineChooseBtnLists = [
  {
    title: "Work",
    fontSize: "180px",
    btns: [
      {
        btnText: "All Works",
      },
      {
        btnText: "Expertise",
      },
      {
        btnText: "Industries",
      },
    ],
  },
];
const WorkPageCardItens = [
  {
    workImg: "https://videinfra.com/assets/images/media/works/follow-art/preview-list@xxl.webp",
    workHeadText: "Follow Art",
    workBottonText: "Marketplace",
  },
  {
    workImg: "https://videinfra.com/assets/images/media/works/p9/preview-list@xxxl.webp",
    workHeadText: "Poklonnaya 9",
    workBottonText: "Promo Website",
  },
  {
    workImg: "https://videinfra.com/assets/images/media/works/fci/preview-list@xxxl.webp",
    workHeadText: "Food Compliance",
    workBottonText: "Corporate Website",
  },
  {
    workImg: "https://videinfra.com/assets/images/media/works/amaffi/preview-list@xxxl.webp",
    workHeadText: "Amaffi",
    workBottonText: "Online Store",
  },
  {
    workImg: "https://videinfra.com/assets/images/media/works/ava-group/preview-list@xxxl.webp",
    workHeadText: "AVA Group",
    workBottonText: "Corporate Website",
  },
  {
    workImg: "https://videinfra.com/assets/images/media/works/naftagaz/preview-list@xxxl.webp",
    workHeadText: "Naftagaz",
    workBottonText: "Corporate Website",
  },
  {
    workImg: "https://videinfra.com/assets/images/media/works/3d-works/preview-list@xxxl.webp",
    workHeadText: "3D & Visualisation Works",
    workBottonText: "3D & Visualisation",
  },
  {
    workImg: "https://videinfra.com/assets/images/media/works/alcon/preview-list@xxxl.webp",
    workHeadText: "Alcon Group",
    workBottonText: "Corporate Website",
  },
  {
    workImg: "https://videinfra.com/assets/images/media/works/eniteo/preview-list@xxxl.webp",
    workHeadText: "Eniteo",
    workBottonText: "Promo Website",
  },
  {
    workImg: "https://videinfra.com/assets/images/media/works/tasky/preview-list@xxxl.webp",
    workHeadText: "Tasky",
    workBottonText: "Marketplace",
  },
  {
    workImg:
      "https://videinfra.com/assets/images/media/works/british-airways/preview-list@xxxl.webp",
    workHeadText: "British Airways",
    workBottonText: "Self-Service, Customer Portal",
  },
  {
    workImg: "https://videinfra.com/assets/images/media/works/ever/preview-list@xxxl.webp",
    workHeadText: "Ever",
    workBottonText: "Promo Website",
  },
  {
    workImg: "https://videinfra.com/assets/images/media/works/vpr/preview-list@xxxl.webp",
    workHeadText: "Victory Park Residences",
    workBottonText: "Promo Website",
  },
  {
    workImg:
      "https://videinfra.com/assets/images/media/works/amaffi-corporate-portal/preview-list@xxxl.webp",
    workHeadText: "Amaffi Corporate Portal",
    workBottonText: "Corporate Portal",
  },
  {
    workImg:
      "https://videinfra.com/assets/images/media/works/accent-cabinet/preview-list@xxxl.webp",
    workHeadText: "Accent Asset Management Investor Portal",
    workBottonText: "Investment Management",
  },
  {
    workImg:
      "https://videinfra.com/assets/images/media/works/print-design-works/preview-list@xxxl.webp",
    workHeadText: "Print Design Works",
    workBottonText: "Print design",
  },
  {
    workImg: "https://videinfra.com/assets/images/media/works/accent/preview-list@xxxl.webp",
    workHeadText: "Accent Capital",
    workBottonText: "Corporate Website, Branding",
  },
  {
    workImg: "https://videinfra.com/assets/images/media/works/bite/preview-list@xxxl.webp",
    workHeadText: "Bite",
    workBottonText: "Self-Service, Online Store, Corporate Website",
  },
  {
    workImg: "https://videinfra.com/assets/images/media/works/pioneer/preview-list@xxxl.webp",
    workHeadText: "Pioneer Service",
    workBottonText: "Self-Service, Corporate Website",
  },
  {
    workImg: "https://videinfra.com/assets/images/media/works/transact-bank/preview-list@xxxl.webp",
    workHeadText: "Transact Bank",
    workBottonText: "Banking, Corporate Website",
  },
  {
    workImg: "https://videinfra.com/assets/images/media/works/turnkey/preview-list@xxxl.webp",
    workHeadText: "TurnKey Lender",
    workBottonText: "Corporate Website",
  },
  {
    workImg: "https://videinfra.com/assets/images/media/works/aqrm/preview-list@xxxl.webp",
    workHeadText: "AQRM",
    workBottonText: "Investment Management",
  },
  {
    workImg: "https://videinfra.com/assets/images/media/works/loftec/preview-list@xxxl.webp",
    workHeadText: "Loftec",
    workBottonText: "Promo Website",
  },

  {
    workImg: "https://videinfra.com/assets/images/media/works/yes/preview-list@xxxl.webp",
    workHeadText: "YE’S Apart-hotel",
    workBottonText: "Self-Service, Corporate Website",
  },
  {
    workImg: "https://videinfra.com/assets/images/media/works/k24/preview-list@xxxl.webp",
    workHeadText: "Composition No.24",
    workBottonText: "Promo Website",
  },
  {
    workImg: "https://videinfra.com/assets/images/media/works/3s-group/preview-list@xxxl.webp",
    workHeadText: "3S Group",
    workBottonText: "Corporate Website",
  },

  {
    workImg: "https://videinfra.com/assets/images/media/works/fairy-forest/preview-list@xxxl.webp",
    workHeadText: "Fairy Forest",
    workBottonText: "Promo Website",
  },

  {
    workImg: "https://videinfra.com/assets/images/media/works/astris/preview-list@xxxl.webp",
    workHeadText: "Astris",
    workBottonText: "Promo Website, Branding, 3D",
  },
  {
    workImg: "https://videinfra.com/assets/images/media/works/neva-towers/preview-list@xxxl.webp",
    workHeadText: "Neva Towers",
    workBottonText: "Promo Website",
  },
  {
    workImg: "https://videinfra.com/assets/images/media/works/jayasom/preview-list@xxxl.webp",
    workHeadText: "Jayasom",
    workBottonText: "Promo Website",
  },
  {
    workImg:
      "https://videinfra.com/assets/images/media/works/rd-electronics/preview-list@xxxl.webp",
    workHeadText: "RD Electronics",
    workBottonText: "Online Store",
  },
  {
    workImg: "https://videinfra.com/assets/images/media/works/dnb/preview-list@xxxl.webp",
    workHeadText: "DNB",
    workBottonText: "Corporate Portal",
  },
  {
    workImg: "https://videinfra.com/assets/images/media/works/lmt/preview-list@xxxl.webp",
    workHeadText: "LMT",
    workBottonText: "Self-Service, Customer Portal",
  },
  {
    workImg: "https://videinfra.com/assets/images/media/works/khlebny/preview-list@xxxl.webp",
    workHeadText: "House at Khlebny",
    workBottonText: "Promo Website",
  },
  {
    workImg: "https://videinfra.com/assets/images/media/works/ablv/preview-list@xxxl.webp",
    workHeadText: "ABLV",
    workBottonText: "Corporate Portal, Corporate Website",
  },
  {
    workImg: "https://videinfra.com/assets/images/media/works/level/preview-list@xxxl.webp",
    workHeadText: "Level",
    workBottonText: "Promo Website",
  },
  {
    workImg: "https://videinfra.com/assets/images/media/works/ge-money-bank/preview-list@xxxl.webp",
    workHeadText: "GE Money Bank",
    workBottonText: "Self-Service, Customer Portal",
  },
  {
    workImg: "https://videinfra.com/assets/images/media/works/hi-task/preview-list@xxxl.webp",
    workHeadText: "HiTask",
    workBottonText: "SaaS",
  },
];
