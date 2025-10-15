import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { useContent } from "../../contexts/ContentContext";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import styles from "./Experience.module.css";

function Experience() {
  const { content } = useContent();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className={`${styles.container} scroll-animate ${
        isVisible ? "visible" : ""
      }`}
      id="experience"
    >
      <h2 className={styles.title}>Опыт работы</h2>
      <div className={styles.list}>
        {content.experience.map((exp) => (
          <div key={exp.id} className={styles.item}>
            <div className={styles.header}>
              <div>
                <h3 className={styles.company}>{exp.company}</h3>
                <p className={styles.position}>
                  {exp.position} • {exp.period}
                </p>
              </div>
            </div>

            <p className={styles.description}>{exp.description}</p>

            <h4 className={styles.subtitle}>Обязанности:</h4>
            <ul className={styles.list}>
              {exp.achievements.map((item, idx) => (
                <li key={idx} className={styles.listItem}>
                  {item}
                </li>
              ))}
            </ul>

            <h4 className={styles.subtitle}>Технологии:</h4>
            <div className={styles.tech}>
              {exp.technologies.map((tech, idx) => (
                <span key={idx} className={styles.techTag}>
                  {tech}
                </span>
              ))}
            </div>

            {exp.projects && exp.projects.length > 0 && (
              <>
                <h4 className={styles.subtitle}>Проекты:</h4>
                <div className={styles.projects}>
                  {exp.projects.map((proj, idx) => (
                    <a
                      key={idx}
                      href={proj.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                    >
                      <FiExternalLink className={styles.linkIconSvg} />
                      {proj.name}
                    </a>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
