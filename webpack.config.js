module.exports =  {
  entry: './src/index.js',
  output: {
    filename: 'angular-exports.js',
    library: 'angular-exports',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    // 'angular': 'angular' // removes angular from built artifact
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
