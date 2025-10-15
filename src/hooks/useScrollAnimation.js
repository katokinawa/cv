import { useEffect, useRef, useState } from "react";

export const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;

    // Проверка поддержки IntersectionObserver
    if (!currentRef || typeof IntersectionObserver === "undefined") {
      setIsVisible(true); // Показываем контент сразу, если API недоступно
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Анимация срабатывает только один раз при появлении
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Отключаем наблюдение после срабатывания для оптимизации
          observer.unobserve(currentRef);
        }
      },
      {
        // Более низкий threshold для мобильных устройств
        threshold: options.threshold || 0.1,
        // Добавляем rootMargin для триггера анимации чуть раньше
        rootMargin: options.rootMargin || "0px 0px -50px 0px",
        ...options,
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []); // Убираем isVisible из зависимостей

  return { ref, isVisible };
};
