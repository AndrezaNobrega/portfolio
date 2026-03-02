import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import { translations } from "../../translations";
import "./Header.css";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, toggleLanguage } = useContext(LanguageContext);

  const t = translations[language];

  return (
    <header className="header">
      <div className="logo">AN</div>

      <nav className="nav">
        <a href="#about">{t.about}</a>
        <a href="#projects">{t.projects}</a>
        <a href="#contact">{t.contact}</a>
        <a href="#experience">{t.experience}</a>

      </nav>

      <div className="header-actions">
        <div className="lang-toggle" onClick={toggleLanguage}>
          <span className={language === "en" ? "active" : ""}>EN</span>
          <span className={language === "pt" ? "active" : ""}>PT</span>
          <div className={`slider ${language}`} />
        </div>

        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "dark" ? "Light" : "Dark"}
        </button>
      </div>
    </header>
  );
};

export default Header;
