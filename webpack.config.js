module.exports = {
  entry: "./main",
  output: { filename: "app.js" },
  module: {
    rules: [
      {
        test: /.ts$/,
        use: [
          "source-map-loader",
          "ts-loader"
        ]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  }
}