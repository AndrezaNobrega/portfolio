import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { translations } from "../../translations";
import "./Experience.css";

const Experience = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <h2 className="experience-title">{t.experienceTitle}</h2>

        <div className="experience-item">
          <h3>{t.experienceCompany}</h3>
          <span>{t.experienceRole}</span>

          <ul>
            {t.experienceHighlights.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;