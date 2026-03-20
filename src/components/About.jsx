import lilliAbout from "../assets/about.jpg";
import { cvURL } from "../utils/data";

const About = () => {
  return (
    <section className="section-about" id="about" aria-label="about">
      <article className="about-container">
        <section className="about-img" aria-label="image">
          <img className="secondary-img" src={lilliAbout} alt="lilli" />
        </section>
        <section className="about-content" aria-label="content">
          <h2>
            About <span>me</span>
          </h2>
          <p>
            Hello again. I'm an engineer, developer, designer, and stories-writer in my free time.
          </p>
          <p>
            I'm so passionate about creating new things—whether it’s a software app, written story, or any project that involves creativity and innovation.
          </p>
          <a
            className="btn btn-cv"
            href={cvURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            View my CV
          </a>
        </section>
      </article>
    </section>
  );
};

export default About;
