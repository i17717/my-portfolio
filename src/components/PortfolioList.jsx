import { portfolio } from "../utils/portfolioData";
import Portfolio from "./Portfolio";
import Curve from "./Curve";
import { nanoid } from "nanoid";

const portfolioList = () => {
  return (
    <section
      className="section-portfolio"
      id="portfolio"
      aria-label="portfolio"
    >
      <Curve color="#e6e6e6" design="curve flip" />
      <article className="portfolio-container">
        <h2>
          My <span>portfolio</span>
        </h2>
        <section className="list">
          {portfolio
            .map(portfolio => <Portfolio {...portfolio} key={nanoid()} />)
            .reverse()}
        </section>
      </article>
    </section>
  );
};

export default portfolioList;
