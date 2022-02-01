module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fade: 'fadeOut 2s ease-in-out',
      },
      keyframes: theme => ({
        fadeOut: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1},
        },
      }),
    },
  },
  plugins: [],
}
