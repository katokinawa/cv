import React, { useEffect } from "react";
import typography from "../../utils/typography";

const TypographyProvider = ({ children }) => {
  useEffect(() => {
    // Инжектируем стили Typography.js при монтировании компонента
    typography.injectStyles();

    // Добавляем класс к body для активации typography стилей
    document.body.classList.add("typography");

    return () => {
      // Очистка при размонтировании
      document.body.classList.remove("typography");
    };
  }, []);

  return <>{children}</>;
};

export default TypographyProvider;
