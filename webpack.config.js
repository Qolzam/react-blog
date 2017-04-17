var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!foundation-sites/dist/js/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    modules: [
      'node_modules',
      './app/components',
      './app/api'
    ],
    alias: {
    //  applicationStyles: './app/styles/app.scss'
    },
    extensions: ['.scss','.js', '.jsx']
  },
  module: {
    rules: [
      {
      test: /\.jsx$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['react', 'latest', 'stage-0']
        }
      }
    },
      {
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "sass-loader",
                options: {
                  includePaths: [
                    path.resolve(__dirname, './node_modules/foundation-sites/scss')
                  ]
                }
            }]
        }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
