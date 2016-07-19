module.exports = {
    entry: './src/index.js',
    output: {
        path: './build',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader'
        }
      ]
    },
    devServer:{
        progress:true,
        contentBase:'build',
        stats:{colors:true},
        inline:true,
        publicPath:'/static/'
    }


}
