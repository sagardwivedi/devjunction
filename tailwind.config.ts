import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|input|select|avatar).js",
  ],
  theme: {
    fontFamily: {
      nunito: ["var(--nunito)", "sans"],
      jua: ["var(--jua)", "sans-serif"],
    },
    extend: {
      colors: {
        primary_c: "#7FB069",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
