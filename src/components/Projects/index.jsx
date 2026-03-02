import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { translations } from "../../translations";
import "./Projects.css";

const Projects = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <section id="projects" className="projects">
      <h2 className="projects-title">{t.projects}</h2>

      {t.projectsList.map((project, index) => (
        <div className="project-item" key={index}>
          <h3>{project.title}</h3>
          <span>{project.tech}</span>
          <p>{project.description}</p>

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
        </div>
      ))}
    </section>
  );
};

export default Projects;
