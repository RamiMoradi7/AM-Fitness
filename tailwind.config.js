// tailwind.config.js
const { default: theme, content } = require("@material-tailwind/react/theme");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js",
  ],
  theme: {
    extend: {
      height: {
        "95vh": "95vh",
      },
    },
  },
  plugins: [],
};
