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

        // ui
        uiPrimaryColor: "var(--ui-primary-color)",
        uiBgColor: "var(--ui-bg-color)",
        uiMainColor: "var(--ui-main-color)",
        uiTextColor: "var(--ui-text-color)",
        uiToolbarIconColor: "var(--ui-icon-color)",

        // ui
        "tiptap-primary": "var(--tiptap-primary-color)",
        "tiptap-bg": "var(--tiptap-bg-color)",
        "tiptap-main": "var(--tiptap-main-color)",
        "tiptap-text": "var(--tiptap-text-color)",
        "tiptap-toolbar-icon": "var(--tiptap-icon-color)",
      },
    },
  },
  // corePlugins: {
  //   preflight: false,
  // },
  plugins: [],
}
