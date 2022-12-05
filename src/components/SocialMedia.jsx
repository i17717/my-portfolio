import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaGlobe,
  FaBehance
} from "react-icons/fa";

const Alert = ({ setIsOpen }) => {
  return (
    <>
      <li key="1" className="social-icons">
        <a
          href="https://facebook.com/lillime0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
      </li>
      <li key="2" className="social-icons">
        <a
          href="https://twitter.com/lillime0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
      </li>
      <li key="3" className="social-icons">
        <a
          href="https://linkedin.com/in/lillime0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </li>
      <li key="4" className="social-icons">
        <a
          href="https://github.com/lillime0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </li>
      <li key="5" className="social-icons">
        <a
          href="https://behance.net/lillime0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaBehance />
        </a>
      </li>
      <li key="6" className="social-icons">
        <a
          href="https://lillime0.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGlobe />
        </a>
      </li>
    </>
  );
};

export default Alert;
