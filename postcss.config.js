module.exports = {
  plugins: [
    // "@tailwindcss/jit" JIT still has some bugs,
    "tailwindcss",
    [
      "postcss-preset-env",
      {
        autoprefixer: {
          flexbox: "no-2009",
        },
        stage: 3,
        features: {
          "custom-properties": false,
        },
      },
    ],
  ],
};
