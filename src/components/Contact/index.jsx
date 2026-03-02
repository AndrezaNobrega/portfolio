import { useContext } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import { LanguageContext } from "../../context/LanguageContext";
import { translations } from "../../translations";
import "./Contact.css";

const Contact = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const items = [
    { icon: <Mail />, label: "Email", value: "ancarvalho@ecomp.uefs.br", href: "mailto:ancarvalho@ecomp.uefs.br" },
    { icon: <Phone />, label: "Phone", value: "+55 75 99183-5873", href: "tel:+557591835873" },
    { icon: <Linkedin />, label: "LinkedIn", value: "linkedin.com/in/andrezanobrega", href: "https://linkedin.com/in/andrezanobrega" },
    { icon: <MapPin />, label: "Location", value: t.contactPlace },
  ];

  return (
    <section id="contact" className="contact">
      <h2 className="contact-title">{t.contact}</h2>
      <motion.div
        className="contact-line"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {items.map((item, idx) => (
          <motion.a
            key={idx}
            href={item.href || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
            whileHover={{ scale: 1.05 }}
          >
            <span className="contact-icon">{item.icon}</span>
            <span className="contact-text">{item.value}</span>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default Contact;