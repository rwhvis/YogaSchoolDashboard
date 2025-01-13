import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        yogaGreen: "#144E5A",
        yogaLightGreen: "#144E5A85",
        yogaYellow: "#FEF4E8",
        yogaGray: "#707070",
        yogaBlue: "#FBFCFF",
        yogaBackgroundBlue: "#B5CED3",
        yogaRed: "#FF0000"
      }
    },
  },
  plugins: [],
};
export default config;
