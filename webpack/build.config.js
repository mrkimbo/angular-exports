module.exports =  {
  entry: './src/angular-exports.js',
  output: {
    filename: 'angular-exports.js',
    library: 'angular-exports',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    'angular': 'angular' // removes angular from built artifact
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
