import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss/types/config';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#0075C9',
          green: '#80BC00',
          yellow: '#FDE021',
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
