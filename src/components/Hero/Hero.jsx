import React, { useState, useEffect } from "react";
import { HiMail } from "react-icons/hi";
import { FaTelegram, FaGithub } from "react-icons/fa";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useContent } from "../../contexts/ContentContext";
import styles from "./Hero.module.css";

function Hero() {
  const { content } = useContent();
  const [showModal, setShowModal] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // Закрытие модального окна по Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && showModal) {
        handleCloseModal();
      }
    };

    if (showModal) {
      document.addEventListener("keydown", handleEscape);
      // Блокируем скролл при открытом модальном окне
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [showModal]);

  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowModal(false);
      setIsClosing(false);
    }, 500); // Длительность анимации закрытия
  };

  const titleWords = content.hero.title.split(" ");
  const firstPart = titleWords.slice(0, 2).join(" ");
  const secondPart = titleWords.slice(2).join(" ");

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.dot}></span>
          {content.hero.status}
        </div>

        <h1 className={styles.title}>
          {firstPart}
          <br />
          <span className={styles.titleAccent}>{secondPart}</span>
        </h1>

        <div className={styles.profile}>
          <div
            className={styles.photo}
            onClick={() => setShowModal(true)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setShowModal(true);
              }
            }}
          >
            <img
              src={`${import.meta.env.BASE_URL}images/me.jpg`}
              alt={`Фото ${content.hero.name}`}
              className={styles.photoImg}
            />
            <div className={styles.zoomOverlay}>
              <HiMagnifyingGlass className={styles.zoomIcon} />
            </div>
          </div>
          <div className={styles.name}>{content.hero.name}</div>
        </div>

        <p className={styles.description}>{content.hero.description}</p>

        <div className={styles.buttons}>
          <a href="#contact" className={styles.btn}>
            Связаться
          </a>
          <a href="#projects" className={styles.btn}>
            Мои проекты
          </a>
        </div>

        <div className={styles.social}>
          <a href="mailto:katokinawa@icloud.com" className={styles.socialLink}>
            <HiMail />
          </a>
          <a
            href="https://t.me/harikomi"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <FaTelegram />
          </a>
          <a
            href="https://github.com/katokinawa"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <FaGithub />
          </a>
        </div>
      </div>

      {showModal && (
        <div
          className={`${styles.modal} ${isClosing ? styles.closing : ""}`}
          onClick={handleCloseModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className={`${styles.modalContent} ${
              isClosing ? styles.closing : ""
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeButton}
              onClick={handleCloseModal}
              aria-label="Закрыть модальное окно"
            >
              ×
            </button>
            <img
              src={`${import.meta.env.BASE_URL}images/me.jpg`}
              alt={`Увеличенное фото ${content.hero.name}`}
              className={`${styles.modalImage} ${
                isClosing ? styles.closing : ""
              }`}
              id="modal-title"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Hero;
