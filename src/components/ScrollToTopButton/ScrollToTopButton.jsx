import React, { useState, useEffect } from "react";
import { HiArrowUp } from "react-icons/hi2";
import styles from "./ScrollToTopButton.module.css";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    const handleClick = (event) => {
      const target = event.target.closest(
        'a[href="#contact"], a[href="#projects"]'
      );
      if (target) {
        setShouldShow(true);
      }
    };

    const toggleVisibility = () => {
      if (window.pageYOffset > 300 && shouldShow) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    document.addEventListener("click", handleClick);
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, [shouldShow]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setShouldShow(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      className={styles.scrollButton}
      onClick={scrollToTop}
      aria-label="Прокрутить наверх"
    >
      <HiArrowUp className={styles.icon} />
    </button>
  );
}

export default ScrollToTopButton;
