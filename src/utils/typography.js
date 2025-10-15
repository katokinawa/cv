import Typography from "typography";

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.8,
  headerFontFamily: ["JetBrains Mono", "monospace"],
  bodyFontFamily: ["JetBrains Mono", "monospace"],
  headerWeight: 500,
  bodyWeight: 400,
  boldWeight: 600,
  overrideStyles: ({ rhythm, scale }) => ({
    // Заголовки отключены, так как используем CSS модули
    h1: {},
    h2: {},
    h3: {},
    h4: {},
    h5: {},
    h6: {},
    p: {
      ...scale(0),
      marginBottom: rhythm(1),
      lineHeight: 1.8,
    },
    a: {
      color: "inherit",
      textDecoration: "none",
      transition: "opacity 0.3s ease",
    },
    "a:hover": {
      opacity: 0.7,
    },
    blockquote: {
      ...scale(1.2),
      borderLeft: "4px solid var(--border)",
      paddingLeft: rhythm(1),
      fontStyle: "italic",
      marginLeft: 0,
      marginRight: 0,
      marginBottom: rhythm(1.5),
    },
    ul: {
      marginBottom: rhythm(1),
    },
    ol: {
      marginBottom: rhythm(1),
    },
    li: {
      marginBottom: rhythm(0.25),
    },
    "li > ul, li > ol": {
      marginBottom: rhythm(0.5),
    },
    code: {
      fontFamily: "JetBrains Mono, monospace",
      fontSize: "0.9em",
      backgroundColor: "var(--border)",
      padding: "2px 6px",
      borderRadius: "3px",
    },
    pre: {
      fontFamily: "JetBrains Mono, monospace",
      fontSize: "0.9em",
      backgroundColor: "var(--border)",
      padding: rhythm(1),
      borderRadius: "6px",
      overflow: "auto",
      marginBottom: rhythm(1.5),
    },
    "pre code": {
      backgroundColor: "transparent",
      padding: 0,
    },
    hr: {
      border: "none",
      borderTop: "1px solid var(--border)",
      marginTop: rhythm(2),
      marginBottom: rhythm(2),
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginBottom: rhythm(1.5),
    },
    "th, td": {
      border: "1px solid var(--border)",
      padding: rhythm(0.5),
      textAlign: "left",
    },
    th: {
      fontWeight: 600,
      backgroundColor: "var(--border)",
    },
  }),
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== "production") {
  typography.injectStyles();
}

export default typography;
