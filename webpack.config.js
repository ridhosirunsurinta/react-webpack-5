const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const mode = process.env.NODE_ENV === "production" ? "production" : "development";
const target = process.env.NODE_ENV === "production" ? "browserslist" : "web";

module.exports = {
  mode,
  target,
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i, // sass || scss || css
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
  ],
  resolve: {
    extensions: [".js", "jsx"],
  },
  devtool: 'source-map',
  devServer: {
    contentBase: "./dist",
    hot: true,
  },
};
