import React from "react";
import { useContent } from "../../contexts/ContentContext";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import styles from "./About.module.css";

const About = () => {
  const { content } = useContent();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className={`${styles.container} scroll-animate ${
        isVisible ? "visible" : ""
      }`}
      id="about"
    >
      <h2 className={styles.title}>{content.about.title}</h2>
      <div className={styles.content}>
        <div className={styles.text}>
          <p>{content.about.description}</p>
        </div>

        <div className={styles.stats}>
          {content.about.stats.map((stat, i) => (
            <div key={i} className={styles.stat}>
              <div className={styles.number}>{stat.number}</div>
              <div className={styles.label}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
