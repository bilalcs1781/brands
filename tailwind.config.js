/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "2rem",
        xl: "3rem",
        "2xl": "4rem",
      },
    },
    extend: {
      backgroundImage: {
        "footer-image": "url('/src/assets/images/bg-image.png')",
        "contact-image": "url('/src/assets/images/contact-image.png')",
      },
    },
  },
  plugins: [],
};
