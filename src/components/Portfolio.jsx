const Portfolio = ({ img, url, name }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="portfolio-item"
    >
      <figure>
        <img className="portfolio-img" loading="lazy" src={img} alt={name} />
        <figcaption className="portfolio-name">{name}</figcaption>
      </figure>
    </a>
  );
};

export default Portfolio;
