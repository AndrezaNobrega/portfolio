import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { translations } from "../../translations";
import "./Contact.css";

const Contact = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <section id="contact" className="contact">
      <h2 className="contact-title">{t.contact}</h2>

      <div className="contact-item">
        <strong>{t.contactEmail}:</strong>{" "}
        <a href="mailto:ancarvalho@ecomp.uefs.br">ancarvalho@ecomp.uefs.br</a>
      </div>
      <div className="contact-item">
        <strong>{t.contactPhone}:</strong>{" "}
        <a href="tel:+557591835873">+55 75 9183-5873</a>
      </div>
      <div className="contact-item">
        <strong>{t.contactLinkedIn}:</strong>{" "}
        <a
          href="https://linkedin.com/in/andrezanobrega"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin.com/in/andrezanobrega
        </a>
      </div>
      <div className="contact-item">
        <strong>{t.contactLocation}:</strong> {t.contactPlace}
      </div>
    </section>
  );
};

export default Contact;
