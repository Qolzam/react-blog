var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'react-image-gallery/styles/scss/image-gallery.scss',
    'semantic-ui-css/semantic.min.css',
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
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js',

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
  devtool: 'cheap-module-eval-source-map'
};
