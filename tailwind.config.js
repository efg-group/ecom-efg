module.exports = {
  mode: "jit",
  prefix: "tw-",
  purge: {
    enabled: true,
    content: ["./src/**/*.{html,ts}"],
  },
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      wide: { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      desktop: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      laptop: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      tablet: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      mobile: { max: "639px" },
      // => @media (max-width: 639px) { ... }
      mini: { max: "480px" },
      // => @media (max-width: 639px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
