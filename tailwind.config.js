/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/components/*.{js,ts,jsx,tsx,mdx}",
    "./public/components/faq/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 4px 11px #000",
      },
    },
  },
  plugins: [],
};
