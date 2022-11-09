export const Insights = () => {
  return (
    <div className="insights-content">
      <div className="head-row">
        <h1>Insights</h1>
        <p>Read Our Blog</p>
      </div>
      <div className="insights-list">
        {lists.map(({ url, text, min, type }, i) => (
          <div className="list">
            <img src={url} alt="" />
            <p>{text}</p>
            <span className="duration">
              <span>{min}</span>
              <span>{type}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const lists = [
  {
    url: "https://videinfra.com/assets/images/media/blog/red-dot-awards/preview@xs.webp",
    text: "Two Vide Infra Products Win Prestigious Red Dot Design Award",
    min: "1 min",
    type: "News, Awards",
  },
  {
    url: "https://videinfra.com/assets/images/media/blog/marketplace/preview@xs.webp",
    text: "How to Build an Online Marketplace: A Complete Guide",
    min: "11 min",
    type: "UX design, Marketplaces, eCommerce",
  },
  {
    url: "https://videinfra.com/assets/images/media/blog/sylius-or-magento/preview@xs.webp",
    text: "Sylius vs Magento: What to Choose As Your eCommerce Platform?",
    min: "6 min",
    type: "eCommerce",
  },
];
