import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        headerBG: '#03827E',
        navText: '#FFFFFF80',

        textFooterLeft: '#a59e9e',
        textAside: '#cccccc'
      },
      fontSize: {
        tiny: '10px',
        xtiny: '14px',
        base: '16px',
        large: '24px',

        'clamp1': 'clamp(0.5rem, 1vw + 0.5rem, 1.5rem)',
      },
      backgroundImage: {
        'nav-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0.3) 100%)',
        'nav-mobile-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0.3) 100%)',
      },
      screens: {
        '860': '860px',
        '540': '540px',
      },
    },
  },
  plugins: [],
};
export default config;
