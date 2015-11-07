var path = require("path");
var webpack = require("webpack");

  var plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        IS_BROWSER: true
      }
    }),
    new webpack.NoErrorsPlugin()
  ];


module.exports = {
    devtool: 'eval',
    entry: {
      bundle: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/main.js'
      ]
    },
    output: {
      path: './dist',
      filename: '[name].js',
      publicPath: '/scripts/'
    },
    plugins: plugins,
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    eslint: {
      configFile: path.resolve(__dirname, './.eslintrc')
    },
    module: {
      preLoaders: [
        {test: /\.jsx?$/, loader: "eslint-loader", exclude: /node_modules/}
      ],
      loaders: [
        {
          exclude: /node_modules/,
          include:  path.resolve(__dirname, "./src"),
          test: /\.jsx?$/,
          loaders: ['babel']
        }
      ]
    }
  };
