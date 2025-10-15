import React from "react";
import { HiAcademicCap } from "react-icons/hi";
import { FiExternalLink } from "react-icons/fi";
import { useContent } from "../../contexts/ContentContext";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import styles from "./Education.module.css";

const Education = () => {
  const { content } = useContent();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className={`${styles.container} scroll-animate ${
        isVisible ? "visible" : ""
      }`}
      id="education"
    >
      <h2 className={styles.title}>Образование</h2>
      <div className={styles.list}>
        {content.education.map((edu) => (
          <div key={edu.id} className={styles.item}>
            <div className={styles.icon}>
              <HiAcademicCap />
            </div>
            <div className={styles.content}>
              <div className={styles.header}>
                <h3 className={styles.institution}>{edu.institution}</h3>
                {edu.link && (
                  <a
                    href={edu.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    <FiExternalLink />
                  </a>
                )}
              </div>
              <p className={styles.degree}>{edu.degree}</p>
              <p className={styles.year}>{edu.year}</p>
              <p className={styles.description}>{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
