module.exports = {
  plugins: {
    istanbub: {
      dir: "./coverage",
      reporters: [
        "text-summary", "lcov"
      ],
      exclude: [],
      include: [
        "**/oak-i18n-behavior.html"
      ],
    }
  }
}
