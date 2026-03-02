import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { translations } from "../../translations";
import "./About.css";

const About = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2 className="about-title">{t.aboutTitle}</h2>

        <div className="about-content">
          <p className="about-highlight">
            {t.aboutHighlight}
          </p>

          <p className="about-text">
            {t.aboutText}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;