import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { translations } from "../../translations";
import "./Hero.css";

const Hero = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <section className="hero">
      <h1 className="hero-title">{t.heroTitle}</h1>
      <p className="hero-subtitle">{t.heroSubtitle}</p>
      <p className="hero-description">{t.heroDescription}</p>
    </section>
  );
};

export default Hero;