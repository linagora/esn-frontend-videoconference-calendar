const path = require('path');
const webpack = require('webpack');

const chartJs = path.resolve(__dirname, 'node_modules', 'esn-frontend-common-libs', 'src', 'frontend', 'components', 'Chart.js/Chart.js');
const materialAdmin = path.resolve(__dirname, 'node_modules', 'esn-frontend-common-libs', 'src', 'frontend', 'js', 'material.js');
const pugLoaderOptions = {
  root: `${__dirname}/node_modules/esn-frontend-common-libs/src/frontend/views`
};

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.IgnorePlugin({ resourceRegExp: /codemirror/ }), // for summernote
    new webpack.ProvidePlugin({
      Chart: chartJs,
      materialAdmin: materialAdmin
    })
  ],
  module: {
    rules: [
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      },
      {
        test: /all\.less$/,
        use: [
          {
            loader: 'style-loader' // creates style nodes from JS strings
          },
          {
            loader: 'css-loader' // translates CSS into CommonJS
          },
          {
            loader: 'less-loader', // compiles Less to CSS
            options: {
              lessOptions: {
                javascriptEnabled: true
              }
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'url-loader'
          }
        ]
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
      {
        test: /\.pug$/i,
        exclude: [
          /assets\/index\.pug$/
        ],
        use: [
          {
            loader: 'apply-loader'
          },
          {
            loader: 'pug-loader',
            options: pugLoaderOptions
          }
        ]
      }
    ]
  }
};
