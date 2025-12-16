import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { links } from "../utils/data";
import lilliLogo from "../assets/lilli-logo.svg";

const Nav = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <nav className={`nav ${showLinks && "nav-bg"}`}>
      <div className="nav-sm">
        <a href="https://i17717.github.io">
          <img className="nav-logo" src={lilliLogo} alt="Lilli logo" />
        </a>
        <button
          className="nav-toggle"
          onClick={() => setShowLinks(!showLinks)}
          aria-label="navigation icon"
        >
          <FaBars />
        </button>
      </div>
      <div className="links-container">
        <ul className={`links ${showLinks && "show-links"}`}>
          {links.map(({ id, url, text }) => {
            return (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
