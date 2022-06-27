/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      ubuntu: ["ubuntu"],
      "ubuntu-light": ["ubuntu-light"],
      "ubuntu-bold": ["ubuntu-bold"],
      "ubuntu-italic": ["ubuntu-italic"],
      "ubuntu-bold-italic": ["ubuntu-bold-italic"],
      "ubuntu-mono": ["ubuntu-mono"],
      "ubuntu-mono-bold": ["ubuntu-mono-bold"],
      "ubuntu-mono-italic": ["ubuntu-mono-italic"],
      "ubuntu-mono-bold-italic": ["ubuntu-mono-bold-italic"],
    },
    extend: {},
  },
  plugins: [],
};
