const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        display: ['Ogre', ...defaultTheme.fontFamily.sans],
        body: ['"DM Sans"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          primary: '#E0A82E',
          secondary: '#F9D72F',
          accent: '#181830',
          neutral: '#181830',
          'base-100': '#FFFFFF',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
        },
        dark: {
          primary: 'red',
        },
      },
    ],
  },
};
