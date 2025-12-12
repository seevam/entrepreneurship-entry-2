import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'duolingo-green': '#58CC02',
        'duolingo-blue': '#1CB0F6',
        'duolingo-red': '#FF4B4B',
        'duolingo-yellow': '#FFC800',
        'duolingo-purple': '#CE82FF',
        background: '#FFFFFF',
        surface: '#F7F7F7',
        border: '#E5E5E5',
        'text-primary': '#3C3C3C',
        'text-secondary': '#777777',
        success: '#58CC02',
        warning: '#FFC800',
        error: '#FF4B4B',
        info: '#1CB0F6',
        locked: '#AFAFAF',
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'lg': '16px',
        'md': '12px',
        'sm': '8px',
      },
      animation: {
        'bounce-gentle': 'bounce 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
