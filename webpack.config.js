module.exports = {
  entry: "./lib/space_thief.jsx",
  output: {
      filename: "bundle.js"
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
};
