import Curve from "./Curve";
import SocialMedia from "./SocialMedia";
import lilliHeader from "../assets/header.jpg";

const Header = () => {
  return (
    <header className="header" id="header">
      <div className="container">
        <section className="section-info" aria-label="banner content">
          <p className="subtitle-1">Hi, my name is</p>
          <h1>Ruaa (Lilli) Ibrahim</h1>
          {/* <p className="subtitle-2">I'm a Web & Mobile Developer</p> */}
          <p className="subtitle-2">I'm a Software Engineer</p>
          <div className="section-media">
            <ul className="social-icons">
              <SocialMedia />
            </ul>
            {/* <a
              className="btn btn-hire"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              Hire me
            </a> */}
          </div>
        </section>
        <section className="section-img">
          <img src={lilliHeader} className="main-img" alt="lilli" />
        </section>
      </div>
      <Curve color="#101010" design="curve flip" />
    </header>
  );
};

export default Header;
