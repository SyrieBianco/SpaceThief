module.exports = {
  entry: "./lib/space_thief",
  output: {
      filename: "./lib/bundle.js"
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
};
