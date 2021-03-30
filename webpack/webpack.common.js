const path = require('path')

module.exports = {
  mode: "production",
  entry: {
    index: './src/bondage.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bondage.min.js',
    libraryTarget: 'var',
    library: 'bondage'
  },
  resolve: {
    extensions: ['.ts', '.js'],
    fallback: {
      fs: false,
      path: false
    }
  },
  plugins: [],
}
