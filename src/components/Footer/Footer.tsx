import "./Footer.css";
import Contact from "../Contact/Contact";

export function Footer() {
  return (
    <footer id="contacts" className="footer section">
      <div className="section__inner footer__inner">
        <h2 className="section__title section__title_footer">Get in touch</h2>
        <p className="footer__blurb">
          Have a project in mind, an interesting opportunity, or a development
          challenge worth discussing? Email me or connect on LinkedIn - let’s
          build something great together!
        </p>
      </div>
      <Contact />
    </footer>
  );
}
