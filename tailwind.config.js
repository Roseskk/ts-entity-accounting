// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.jsx',
    './src/**/*.tsx', // если у тебя TypeScript
    // Другие шаблоны
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Roboto','sans'],
        secondary: ['Poppins','sans']
      }
    }
  }
  // другие настройки
};
