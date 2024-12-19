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
        background: "var(--background)",
        foreground: "var(--foreground)",
        // 主色调：深邃的靛蓝色，代表创新和科技
        'web3': {
          50: '#E6F0FF',
          100: '#B3D1FF',
          200: '#80B3FF',
          300: '#4D94FF',
          400: '#1A75FF',
          500: '#0057FF', // 主色
          600: '#0045CC',
          700: '#003399',
          800: '#002266',
          900: '#001133',
        },
        // 辅助色：霓虹紫，呈现赛博朋克风格
        'cyber': {
          50: '#F5E6FF',
          100: '#E6B3FF',
          200: '#D680FF',
          300: '#C74DFF',
          400: '#B81AFF',
          500: '#A800FF', // 重点强调色
          600: '#8600CC',
          700: '#650099',
          800: '#430066',
          900: '#220033',
        },
        // 荧光色：用于特殊强调
        'neon': {
          accent: '#00FF95', // 用于特殊强调的霓虹绿
          glow: '#00FFD1', // 用于发光效果
        },
      },
    },
  },
  plugins: [],
};
export default config;
