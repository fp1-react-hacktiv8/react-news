import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      serif: ["Poppins", "serif"],
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#1f1f1f",
          "primary-content": "#ffffff",
          // "base-100": "#e0e0e0",
          "base-100": "#f9f9f9",
        },
      },
      {
        dark: {
          primary: "#ffffff",
          "primary-content": "#1E293B",
          "base-100": "#1E293B",
        },
      },
    ],
  },
};
