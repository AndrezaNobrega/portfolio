import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { translations } from "../../translations";
import * as LucideIcons from "lucide-react";
import { motion } from "framer-motion";
import "./Projects.css";

const techIcons = {
  React: LucideIcons.Atom,
  "TypeScript": LucideIcons.FileCode,
  "React Native": LucideIcons.Smartphone,
  Node: LucideIcons.Server,
  MUI: LucideIcons.LayoutGrid,
  "REST APIs": LucideIcons.Database,
  "Socket Communication": LucideIcons.Wifi,
  "POS Integration": LucideIcons.CreditCard,
};

const Projects = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, type: "spring", stiffness: 80 },
    }),
  };

  return (
    <section id="projects" className="projects">
      <h2 className="projects-title">{t.projects}</h2>

      <motion.div
        className="projects-list"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {t.projectsList.map((project, index) => (
          <motion.div
            className="project-item"
            key={index}
            custom={index}
            variants={fadeIn}
          >
            <h3 className="project-title">{project.title}</h3>

            <div className="project-tech">
              {project.tech.split("|").map((tech, i) => {
                const name = tech.trim();
                const IconComponent = techIcons[name] || LucideIcons.Code;
                return (
                  <div className="tech-item" key={i}>
                    <IconComponent size={20} />
                    <span className="tech-name">{name}</span>
                  </div>
                );
              })}
            </div>

            <p className="project-description">{project.description}</p>

            {project.links && project.links.length > 0 && (
              <div className="project-links">
                {project.links.map((link, i) => (
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={i}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;