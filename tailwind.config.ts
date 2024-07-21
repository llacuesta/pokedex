import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {
      pattern: /bg-(normal|fire|fighting|water|flying|grass|poison|electric|ground|psychic|rock|ice|bug|dragon|ghost|dark|steel|fairy|white)/,
    },
  ],
  theme: {
    colors: {
      'normal': '#B8B9AB',
      'fire': '#E95436',
      'fighting': '#AE5B4B',
      'water': '#6391CD',
      'flying': '#7594CA',
      'grass': '#8DC266',
      'poison': '#A15B97',
      'electric': '#F7CD55',
      'ground': '#CFB262',
      'psychic': '#EC6391',
      'rock': '#B7A86D',
      'ice': '#92D5F5',
      'bug': '#AFBA42',
      'dragon': '#6366AD',
      'ghost': '#6568AD',
      'dark': '#725649',
      'steel': '#A3A3B3',
      'fairy': '#DAB0D4',
      'white': '#FFFFFF'
    },
    container: {
      center: true,
      padding: "2rem",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: "var(--font-jetbrainsMono)",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        'spin-slow': 'slow 15s linear infinite'
      },
      keyframes: {
        slow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' }
        }
      }
    },
  },
  plugins: [],
};

export default config;
