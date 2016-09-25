const path = require('path')

module.exports = {
  context: __dirname,
  entry: './js/ClientApp.js',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true, // verbose error messages
    chunks: false
  },
  module: {
    loaders: [ // this is basically the build pipeline
      {
        test: /\.jsx?$/,  // this says "if test true", load the loader below:
        loader: 'babel-loader'
      }
    ]
  }
}
