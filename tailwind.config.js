module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Adjust based on your project structure
  ],
  theme: {
    extend: {
      keyframes: {
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fade: 'fade 1s ease-in-out',
      },
    },
  },
  plugins: [],
};
