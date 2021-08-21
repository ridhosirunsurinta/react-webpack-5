const mode = process.env.NODE_ENV === "production" ? "production" : "development";

module.exports = {
  mode, // "production" || "development"
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  devtool: 'source-map',
  devServer: {
    contentBase: "./dist",
  },
};
