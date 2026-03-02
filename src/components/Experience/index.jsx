import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { translations } from "../../translations";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import "./Experience.css";

const Experience = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, type: "spring", stiffness: 80 },
    }),
  };

  return (
    <section id="experience" className="experience">
      <h2 className="experience-title">{t.experienceTitle}</h2>

      <div className="experience-timeline">
        <motion.div
          className="experience-item"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={0}
          variants={fadeUp}
        >
          <h3 className="experience-company">{t.experienceCompany}</h3>
          <span className="experience-role">{t.experienceRole}</span>

          <ul className="experience-highlights">
            {t.experienceHighlights.map((item, index) => (
              <motion.li
                className="highlight-item"
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
              >
                <Check size={16} className="highlight-icon" />
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;