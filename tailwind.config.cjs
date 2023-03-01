const themeConfig = require('./src/features/core/config/theme.config.cjs');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  ...themeConfig,
};
