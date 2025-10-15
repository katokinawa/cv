import React from "react";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiRedux,
  SiReactrouter,
  SiNextdotjs,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPhp,
  SiGit,
  SiWebpack,
  SiGithub,
  SiNpm,
  SiYarn,
  SiPostman,
  SiNginx,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { FaServer, FaDatabase, FaTerminal } from "react-icons/fa";
import { useContent } from "../../contexts/ContentContext";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import styles from "./Skills.module.css";

const SKILL_ICONS = {
  React: SiReact,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  HTML5: SiHtml5,
  CSS3: SiCss3,
  "Redux Toolkit": SiRedux,
  "React Router": SiReactrouter,
  "Next.js": SiNextdotjs,
  Vite: SiVite,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  MongoDB: SiMongodb,
  Mongoose: FaDatabase,
  PostgreSQL: SiPostgresql,
  PHP: SiPhp,
  Git: SiGit,
  GitHub: SiGithub,
  Webpack: SiWebpack,
  npm: SiNpm,
  yarn: SiYarn,
  Postman: SiPostman,
  Nginx: SiNginx,
  Bash: FaTerminal,
  ModX: FaServer,
  "1С-Битрикс": FaServer,
};

function Skills() {
  const { content } = useContent();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className={`${styles.container} scroll-animate ${
        isVisible ? "visible" : ""
      }`}
      id="skills"
    >
      <h2 className={styles.title}>Навыки</h2>
      <div className={styles.grid}>
        <div className={styles.category}>
          <h3 className={styles.categoryTitle}>Frontend</h3>
          <p className={styles.level}>Продвинутый</p>
          <ul className={styles.skillsList}>
            {content.skills.frontend.map((skill, i) => {
              const Icon = SKILL_ICONS[skill] || SiReact;
              return (
                <li key={i} className={styles.skill}>
                  <Icon className={styles.skillIcon} />
                  <span className={styles.skillName}>{skill}</span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={styles.category}>
          <h3 className={styles.categoryTitle}>Backend</h3>
          <p className={styles.level}>Средний</p>
          <ul className={styles.skillsList}>
            {content.skills.backend.map((skill, i) => {
              const Icon = SKILL_ICONS[skill] || SiReact;
              return (
                <li key={i} className={styles.skill}>
                  <Icon className={styles.skillIcon} />
                  <span className={styles.skillName}>{skill}</span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={styles.category}>
          <h3 className={styles.categoryTitle}>Инструменты</h3>
          <p className={styles.level}>Удобства разработки</p>
          <ul className={styles.skillsList}>
            {content.skills.tools.map((skill, i) => {
              const Icon = SKILL_ICONS[skill] || SiReact;
              return (
                <li key={i} className={styles.skill}>
                  <Icon className={styles.skillIcon} />
                  <span className={styles.skillName}>{skill}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
