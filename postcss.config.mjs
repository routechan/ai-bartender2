const config = {
  plugins: ["@tailwindcss/postcss"],
  theme: {
    extend: {
      keyframes: {
        shake: {
          "0%, 100%": { transform: "rotate(-10deg)" },
          "50%": { transform: "rotate(10deg)" },
        },
      },
      animation: {
        shake: "shake 0.8s ease-in-out infinite",
      },
    },
  },
};

export default config;
