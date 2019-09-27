const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, '../src/index.js')
  },
  output: {
    path: path.join(__dirname, '../build'),
    filename: '[name].js',
    chunkFilename: '[name].js'
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './',
    watchContentBase: true,
    historyApiFallback: true,
    hot: true,
    https: false,
    host: '0.0.0.0',
    port: 8000,
    disableHostCheck: true,
    proxy: {
      '/': {
        // target: 'http://lt.lejent.cn',
        // target:'http://192.168.1.130:8000',//后台调试用地址
        changeOrigin: true
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|lib)/,
        loader: require.resolve('babel-loader')
      },
      {
        test: /\.(scss|sass|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.(less)$/,
        include: /node_modules/,
        use: [ 'style-loader', 'css-loader', {
          loader: 'less-loader',
          options: {
            javascriptEnabled: true,
            modifyVars: {
              'primary-color': '#4B87FD'
            }
          }
        } ]
      },
      {
        test: /\.(less)$/,
        exclude: /node_modules/,
        use: [ 'style-loader', {
          loader: 'css-loader',
          options: {
            localIdentName: '[local]',
            modules: true,
            minimize: true,
            camelCase: true,
            importLoaders: 1
          }
        }, 'less-loader' ]
      },
      {
        test: /\.(png|jpg|jpeg|svg|JPG)$/,
        use: {
          loader: 'url-loader'
        }
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: '@svgr/webpack',
            options: {
              babel: false,
              icon: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // just for development
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../public/index.html'),
      inject: 'body',
      favicon: 'public/favicon.ico',
      chunksSortMode: 'none'
    })
  ]
};

// mexport default module;
