import { useContext } from "react";
import { motion } from "framer-motion";
import { LanguageContext } from "../../context/LanguageContext";
import { translations } from "../../translations";
import "./Hero.css";

const Hero = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  // Variants para animação do Framer Motion
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.section
      className="hero"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 className="hero-title" variants={item}>
        {t.heroTitle}
      </motion.h1>

      <motion.p className="hero-subtitle" variants={item}>
        {t.heroSubtitle}
      </motion.p>

      <motion.p className="hero-description" variants={item}>
        {t.heroDescription}
      </motion.p>
    </motion.section>
  );
};

export default Hero;