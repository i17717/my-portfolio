import lilliLogo from "../assets/lilli-logo.svg";
import Curve from "./Curve";
import { FaArrowAltCircleUp } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Curve color="#ff69b4" design="curve flip" />
      <p>
        Made with ️❤️ by{" "}
        <img className="footer-logo" alt="Lilli logo" src={lilliLogo} /> &copy;{" "}
        {year}
      </p>
      <a href="#header" className="to-top">
        <FaArrowAltCircleUp />
      </a>
    </footer>
  );
};

export default Footer;
