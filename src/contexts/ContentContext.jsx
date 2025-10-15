import React, { createContext, useContext, useState } from "react";

const ContentContext = createContext();

const initialContent = {
  hero: {
    title: "Frontend Developer",
    name: "Даниил Белогур",
    description:
      "Frontend-разработчик с 3+ годами коммерческой разработки. Специализируюсь на экосистеме React. Создание масштабируемых и производительных веб-приложений и оптимизация пользовательского опыта.",
    status: "рассматриваю предложения",
  },
  about: {
    title: "Обо мне",
    description:
      "Следую принципам Clean Code, изучаю современные подходы к разработке через изучение профессиональной литературы и документации. Активно внедряю новые технологии в проекты, где это приносит реальную пользу бизнесу. Опыт работы в экосистеме React, оптимизацией производительности и созданием переиспользуемых компонентов.",
    stats: [
      { number: "3+", label: "года опыта" },
      { number: "7+", label: "проектов" },
      { number: "10+", label: "технологий" },
    ],
  },
  experience: [
    {
      id: 1,
      company: "ЭКО Альтравита",
      position: "Веб-разработчик",
      period: "Сентябрь 2022 - настоящее время (3 года и 2 месяца)",
      description:
        "Разработка и поддержка корпоративных сайтов. Руководство по техническим решениям и архитектуре фронтенда, верстка проекта по дизайну и внедрение современных практик разработки.",
      technologies: [
        "React",
        "React Router",
        "JavaScript",
        "TypeScript",
        "HTML5",
        "CSS3",
        "PHP",
        "ModX",
        "1С-Битрикс",
        "Nginx",
        "Apache",
        "MySQL",
        "SQLite",
        "Jest",
        "Cypress",
      ],
      achievements: [
        "Работа в команде с дизайнерами, SEO, маркетингом и другими специалистами (медицинским персоналом)",
        "Разработка React-приложений с функциональным подходом и server-side rendering",
        "Интеграция React приложений с CMS ModX. Создание компонентов в этих системах. Работа с API 1С-Битрикс.",
        "Оптимизация производительности, внедрение lazy loading, memo, useCallback",
        "SEO-оптимизация, тегированная разметка, оптимизация изображений + работа с base64, повышение Core Web Vitals",
        "Создание масштабируемой архитектуры с переиспользуемыми компонентами и кастомными хуками",
        "Разработка и обслуживание серверной части приложения",
        "Разработка и поддержка клиентской части веб-приложения",
        "Исправление выявленных багов",
        "Анализ причин багов с целью их предотвращения в будущем",
        "Проведение регулярного мониторинга работоспособности и производительности программного продукта",
        "Разработка и осуществление интеграции программных модулей, сборка приложения и его компонентов",
        "Разработка стратегий для обеспечения отказоустойчивости и масштабируемости систем",
        "Ведение отчетности о ходе разработки",
        "Контроль версий программного кода, отслеживание изменений кода и управление ими",
      ],
      projects: [
        {
          name: "reprod.altravita-ivf.ru",
          url: "https://reprod.altravita-ivf.ru/",
        },
        { name: "altravita-ivf.ru", url: "https://altravita-ivf.ru/" },
        { name: "egg-donor-bank.ru", url: "https://egg-donor-bank.ru/" },
        { name: "altragen.ru", url: "https://altragen.ru/" },
        { name: "eko-blog.ru", url: "https://www.eko-blog.ru/" },
      ],
    },
  ],
  projects: [
    {
      id: 1,
      title: "Burgers Restaurant",
      description:
        "SPA для ресторанного бизнеса с drag-and-drop интерфейсом. Реализована система управления заказами, корзина покупок и адаптивный дизайн для всех устройств.",
      technologies: [
        "React",
        "Redux Toolkit",
        "React Router",
        "React DnD",
        "Vite",
        "Jest",
        "Cypress",
      ],
      features: [
        "Интерактивный drag-and-drop конструктор бургеров",
        "Управление состоянием через Redux Toolkit",
        "Адаптивный дизайн для всех устройств",
      ],
      link: "https://github.com/katokinawa/burger-adventure",
    },
    {
      id: 2,
      title: "MATE Clothing Store",
      description:
        "E-commerce платформа для продажи одежды. Включает каталог товаров, систему фильтрации, корзину покупок и адаптивный интерфейс.",
      technologies: ["React", "React Router", "Context API", "Vite"],
      features: [
        "Динамический каталог с фильтрацией и сортировкой",
        "Корзина покупок с расчетом стоимости",
        "Адаптивный современный UI/UX",
      ],
      link: "https://github.com/katokinawa/React-and-Vite-MATE-Clothing-Store",
    },
    {
      id: 3,
      title: "Movie Finder",
      description:
        "Fullstack веб-приложение для поиска и каталогизации фильмов. Интеграция с внешними API, система рекомендаций и персонализированные подборки для пользователей.",
      technologies: [
        "React",
        "React Router",
        "Node.js",
        "Express.js",
        "REST API",
      ],
      features: [
        "Интеграция с внешним API для получения данных о фильмах",
        "Поиск по названию и фильтрация по длительности",
        "Сохранение избранных фильмов",
      ],
      link: "https://github.com/katokinawa/movies-explorer-frontend",
    },
    {
      id: 4,
      title: "Mesto",
      description:
        "Социальная платформа для обмена фотографиями с полноценной системой авторизации. Реализован RESTful API, работа с базами данных MongoDB и современный React-интерфейс.",
      technologies: [
        "React",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "JWT",
        "REST API",
      ],
      features: [
        "Авторизация и регистрация пользователей (JWT)",
        "CRUD операции с карточками",
        "Управление профилем пользователя",
        "RESTful API на Express.js",
        "База данных MongoDB с Mongoose",
      ],
      link: "https://github.com/katokinawa/react-mesto-api-full",
    },
  ],
  skills: {
    frontend: [
      "React",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Redux Toolkit",
      "React Router",
      "Next.js",
      "Vite",
    ],
    backend: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "PostgreSQL",
      "REST API",
      "PHP",
    ],
    tools: [
      "Git",
      "GitHub",
      "Webpack",
      "npm",
      "yarn",
      "Postman",
      "Nginx",
      "Bash",
      "ModX",
      "1С-Битрикс",
    ],
  },
  education: [
    {
      id: 1,
      institution: "Яндекс Практикум",
      degree: "React-разработчик",
      year: "2025",
      description: "Углубленное изучение React-экосистемы, Redux, TypeScript",
      link: "https://practicum.yandex.ru/react/",
    },
    {
      id: 2,
      institution: "Яндекс Практикум",
      degree: "Веб-разработчик",
      year: "2023",
      description: "HTML, CSS, JavaScript, React, Node.js, Express, MongoDB",
      link: "https://practicum.yandex.ru/web/",
    },
    {
      id: 3,
      institution: 'МФПУ "Синергия"',
      degree: "Банковское дело",
      year: "2021",
      description: "СПО",
      link: "https://synergy.ru/abiturientam/programmyi_obucheniya/banking_baccalaureate",
    },
  ],
  contact: {
    email: "katokinawa@icloud.com",
    telegram: "@harikomi",
    github: "github.com/katokinawa",
  },
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error("useContent must be used within a ContentProvider");
  }
  return context;
};

export const ContentProvider = ({ children }) => {
  const [content] = useState(initialContent);

  const value = {
    content,
  };

  return (
    <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
  );
};
