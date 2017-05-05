var webpack = require('webpack');
var path = require('path');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  entry: [
    'react-image-gallery/styles/scss/image-gallery.scss',
    'semantic-ui-css/semantic.min.css',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: (process.env.NODE_ENV === 'production') ? [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compressor: {
        warnings: false
      }
    })
  ] : [],
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js',

  },
  resolve: {
    modules: [
      'node_modules',
      './app/components',
      './app/api',
      './app/constants',
      './app/actions',
      './app/reducers',
      './app/store'

    ],
    alias: {

    },
    extensions: ['.scss', '.js', '.jsx']
  },
  module: {
    rules: [{
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

            ]
          }
        }]
      },
      {
        test: /\.css$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"

        }]
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader'
      },{
					test: /\.(jpe?g|png|webp|gif|cur)$/,
          loader: 'file-loader?name=/images/[name].[ext]'
				}


    ]
  },
  devtool: process.env.NODE_ENV === 'production' ? undefined : 'cheap-module-eval-source-map'
};
