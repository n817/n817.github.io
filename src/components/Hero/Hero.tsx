import "./Hero.css";

import { profile } from "../../data/profile";
import heroIllustration from "../../assets/images/avatar.svg";

export function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="section__inner hero__inner">
        <div className="hero__content">
          <span className="hero__eyebrow">let's work together</span>
          <h1 className="hero__title">{profile.title}</h1>
          <div className="hero__blurb">
            <p>{profile.blurb}</p>
            <p>{profile.contactPrompt}</p>
          </div>

          <div className="hero__actions">
            <a className="button button_primary" href="#projects">
              View my work <span>→</span>
            </a>
            <a className="button button_secondary" href="#contacts">
              Get in touch
            </a>
          </div>

          <p className="hero__trust">{profile.specialization}</p>
        </div>
        <div className="hero__illustration">
          <img src={heroIllustration} alt="AI-powered tool placeholder" />
        </div>
      </div>
    </section>
  );
}
