import React from "react";
import { HiMail } from "react-icons/hi";
import { FaTelegram, FaGithub } from "react-icons/fa";
import { useContent } from "../../contexts/ContentContext";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import styles from "./Contact.module.css";

export default function Contact() {
  const { content } = useContent();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className={`${styles.container} scroll-animate ${
        isVisible ? "visible" : ""
      }`}
      id="contact"
    >
      <h2 className={styles.title}>Контакты</h2>
      <div className={styles.content}>
        <p className={styles.description}>
          Открыт к интересным предложениям и новым проектам. Буду рад обсудить
          возможности сотрудничества!
        </p>

        <div className={styles.grid}>
          <a href={`mailto:${content.contact.email}`} className={styles.card}>
            <div className={styles.icon}>
              <HiMail />
            </div>
            <div className={styles.info}>
              <p className={styles.label}>Email</p>
              <p className={styles.value}>{content.contact.email}</p>
            </div>
          </a>

          <a
            href={`https://t.me/${content.contact.telegram.replace("@", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <div className={styles.icon}>
              <FaTelegram />
            </div>
            <div className={styles.info}>
              <p className={styles.label}>Telegram</p>
              <p className={styles.value}>{content.contact.telegram}</p>
            </div>
          </a>

          <a
            href={`https://${content.contact.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <div className={styles.icon}>
              <FaGithub />
            </div>
            <div className={styles.info}>
              <p className={styles.label}>GitHub</p>
              <p className={styles.value}>{content.contact.github}</p>
            </div>
          </a>
        </div>

        <div className={styles.additional}>
          <h3 className={styles.additionalTitle}>Дополнительная информация</h3>
          <ul className={styles.additionalList}>
            <li className={styles.additionalItem}>
              Активно слежу за трендами в frontend-разработке
            </li>
            <li className={styles.additionalItem}>
              Открыт к изучению новых технологий и фреймворков
            </li>
            <li className={styles.additionalItem}>
              Готов к работе в команде и самостоятельной разработке
            </li>
            <li className={styles.additionalItem}>Опыт работы в Agile/Scrum</li>
            <li className={styles.additionalItem}>
              Английский язык технический (чтение документации)
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
