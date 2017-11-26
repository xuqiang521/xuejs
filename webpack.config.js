const path = require('path')
const webpack = require('webpack')
const OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const port = process.env.NODE_ENV || 9000;

const uri = "http://localhost:" + port;

const ExtractLess = new ExtractTextPlugin({
  filename: 'css/[name].css'
})

module.exports = {
  entry: {
    xue: './src/modules/global-api.js',
  },
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015']
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          attrs: ['img:src', 'link:href']
        }
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        // loader: 'style-loader!css-loader!less-loader',
        loader: ExtractLess.extract(
          {
            fallback:'style-loader',
            use: [
              'css-loader',
              'less-loader',
              {
                loader: 'postcss-loader',
                options: {
                  plugins: [require('autoprefixer')]
                }
              }
            ]
        })
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    new OpenBrowserWebpackPlugin({
      url: uri
    }),
    new HtmlWebpackPlugin({
      // filename: 'pages/index.html',
      template: './src/pages/index.html'
    }),
    // 生成独立css文件
    ExtractLess
    // new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.js', '.json', '.css', '.less'],
    alias: {
      'utils': path.resolve(__dirname, 'src/modules/utils'),
      'compiler': path.resolve(__dirname, 'src/modules/compiler'),
      'watcher': path.resolve(__dirname, 'src/modules/watcher'),
      'observer': path.resolve(__dirname, 'src/modules/observer'),
      'instance': path.resolve(__dirname, 'src/modules/instance'),
      'styles': path.resolve(__dirname, 'src/views')
    }
  },

  devServer: {
    // contentBase: path.resolve(__dirname, 'src'),
    // hot: true,
    port: port,
    historyApiFallback: true
  }
}
