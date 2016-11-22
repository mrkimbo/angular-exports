module.exports =  {
  entry: './src/demo.js',
  output: {
    filename: 'angular-exports.js',
    library: 'angular-exports',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  devServer: {
    contentBase: 'dist/',
    inline: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
};
