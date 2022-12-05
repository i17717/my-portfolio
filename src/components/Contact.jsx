import Form from "./Form";
import Curve from "./Curve";

const Contact = () => {
  return (
    <article className="section-contact" id="contact" aria-label="contact">
      <Curve color="#fff" design="curve" />
      <section className="contact-container">
        <h2>Contact me</h2>
        <p>Always available for working if the right project comes to me</p>
        <Form />
      </section>
    </article>
  );
};

export default Contact;
