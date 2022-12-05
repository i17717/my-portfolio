import { useState, useEffect, useRef } from "react";
import Alert from "./Alert";
// import axios from "axios";
import emailjs from "@emailjs/browser";
import { FaSpinner } from "react-icons/fa";

// const url = "";

const Form = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      setIsLoading(true);
      // await axios.post(url, { email, message });
      /**
       * first step promise.all[await emailjs, await axios]
       */
      await emailjs.sendForm(
        "service_izhzsgo",
        "template_m96m8us",
        formRef.current,
        "user_huqHnLIPO1bNAeUUggHfs"
      );
      setIsOpen(true);
      setIsLoading(false);
      setEmail("");
      setMessage("");
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      // setError(error?.response?.data?.msg);
    }
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setError("");
    }, 2000);
    return () => clearTimeout(timeout);
  }, [error]);

  return (
    <>
      {isOpen && <Alert setIsOpen={setIsOpen} />}
      <form
        className="form"
        method="POST"
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <input
          aria-label="Your email"
          aria-required="true"
          placeholder="Your Email"
          type="email"
          inputMode="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          name="user_email" //for emailij
          // name="email"
          id="email"
          required
        />
        <textarea
          aria-label="Your Message"
          aria-required="true"
          placeholder="Your Message..."
          value={message}
          onChange={e => setMessage(e.target.value)}
          name="message"
          id="message"
          minLength={10}
          required
        ></textarea>
        {error && (
          <p id="message-error" className="errors" role="alert">
            {`* ${error}`}
          </p>
        )}

        <button type="submit" className="btn btn-send">
          {isLoading ? <FaSpinner /> : "Send"}
        </button>
      </form>
    </>
  );
};

export default Form;
