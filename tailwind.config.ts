/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xm: "320px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
      },
      colors: {
        primary: "var(--m-primary-color)",
        bgColor: "var(--m-bg-color)",
        mainColor: "var(--m-main-color)",
        textColor: "var(--m-text-color)",
        toolbarIconColor: "var(--m-icon-color)",
      },
    },
  },
  // corePlugins: {
  //   preflight: false,
  // },
  plugins: [],
}
