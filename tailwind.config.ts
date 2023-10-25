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
      work_sans: ["var(--work_sans)", "sans"],
      syne: ["var(--syne)", "sans-serif"],
    },
    extend: {
      colors: {
        primary_c: "#B8B8FF",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
