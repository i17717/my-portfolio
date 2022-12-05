import { FaWindowClose } from "react-icons/fa";

const Alert = ({ setIsOpen }) => {
  return (
    <section className="alert-overlay">
      <section className="alert" role="alert">
        <p>Thanks for your message.</p>
        <p>I'll reply to you as soon as possible :)</p>
        <button onClick={() => setIsOpen(false)} aria-label="close">
          <FaWindowClose />
        </button>
      </section>
    </section>
  );
};

export default Alert;
