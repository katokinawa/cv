import React from "react";
import { GiHamburger } from "react-icons/gi";
import { HiShoppingBag } from "react-icons/hi";
import { MdMovie } from "react-icons/md";
import { FaCamera } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { useContent } from "../../contexts/ContentContext";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import styles from "./Projects.module.css";

const getProjectIcon = (title) => {
  const icons = {
    "Burgers Restaurant": GiHamburger,
    "MATE Clothing Store": HiShoppingBag,
    "Movie Finder": MdMovie,
    Mesto: FaCamera,
  };
  return icons[title] || GiHamburger;
};

export default function Projects() {
  const { content } = useContent();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className={`${styles.container} scroll-animate ${
        isVisible ? "visible" : ""
      }`}
      id="projects"
    >
      <h2 className={styles.title}>Мои проекты</h2>
      <div className={styles.grid}>
        {content.projects && content.projects.length > 0 ? (
          content.projects.map((project) => {
            const ProjectIcon = getProjectIcon(project.title);
            return (
              <article key={project.id} className={styles.card}>
                <div className={styles.icon}>
                  <ProjectIcon />
                </div>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                <div className={styles.tech}>
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Посмотреть проект
                  <FiArrowRight className={styles.arrowSvg} />
                </a>
              </article>
            );
          })
        ) : (
          <div className={styles.noProjects}>
            <p>Проекты загружаются...</p>
          </div>
        )}
      </div>
    </section>
  );
}
