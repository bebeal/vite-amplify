import type { Config } from 'tailwindcss';
import TypographyPlugin from '@tailwindcss/typography';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [TypographyPlugin],
} satisfies Config;
