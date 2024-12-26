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
        primary: {
          50: '#edfbfe',
          100: '#d7f5fc',
          200: '#c5f7fe',  // 主背景色
          300: '#89e8f8',
          400: '#4cd3ef',
          500: '#25b6db',
          600: '#1992b9',
          700: '#187595',
          800: '#1a607a',
          900: '#1b5066',
        },

        // 蓝色主题色系
        yblue: {
          50: '#eef3fe',
          100: '#e0e9fd',
          200: '#c7d7fb',
          300: '#9db5f7',
          400: '#6d8ff6',
          500: '#295DF4',  // 操作面板主色
          600: '#1e44d9',
          700: '#1c36b5',
          800: '#1d2f93',
          900: '#1d2d74',
        },

        // 文字颜色系统
        text: {
          primary: '#222222',    // 主要文字颜色
          secondary: '#666666',  // 次要文字颜色
          tertiary: '#999999',   // 第三级文字颜色
          light: '#ffffff',      // 亮色文字
          dark: '#000000',       // 深色文字
        },

        // 功能色系
        status: {
          success: '#22c55e',    // 成功
          warning: '#f59e0b',    // 警告
          error: '#ef4444',      // 错误
          info: '#3b82f6',       // 信息
        },

        // 中性色系
        neutral: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },

        // 辅助色系
        accent: {
          purple: '#8b5cf6',     // 特殊强调
          pink: '#ec4899',       // 醒目提示
          orange: '#f97316',     // 活力元素
          teal: '#14b8a6',       // 平衡色调
        },
      },
    },
  },
  plugins: [],
};
export default config;
