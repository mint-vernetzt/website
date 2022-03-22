module.exports = {
  presets: [
    [
      "babel-preset-gatsby",
      {
        targets: {
          browsers: [">0.25%", "not dead"],
        },
        reactRuntime: "automatic",
      },
    ],
    "@babel/preset-typescript",
  ],
};
