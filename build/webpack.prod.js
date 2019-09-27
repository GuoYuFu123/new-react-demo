const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, '../dist');

module.exports = {
  mode: 'production',
  entry: {
    index: path.resolve(__dirname, '../src/index.js')
  },
  output: {
    path: BUILD_DIR,
    filename: '[name]_[chunkhash:8].js',
    chunkFilename: '[name]_[chunkhash:8].js'
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
          MiniCssExtractPlugin.loader, // 'style-loader',
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.(less)$/,
        include: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader, // 'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
              modifyVars: {
                'primary-color': '#4B87FD'
              }
            }
          }
        ]
      },
      {
        test: /\.(less)$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader, // 'style-loader',
          {
            loader: 'css-loader',
            options: {
              localIdentName: '[local]',
              modules: true,
              minimize: true,
              camelCase: true,
              importLoaders: 1
            }
          },
          'less-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|svg|JPG)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 512,
            name: '[name]_[hash:8].[ext]',
            outputPath: './static/images',
            publicPath: '../../static/images/'
          }
        }
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true
        // sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ],
    noEmitOnErrors: true
  },
  plugins: [
    new CleanWebpackPlugin(['*'], { root: BUILD_DIR }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../src/index.html'),
      inject: 'body',
      chunksSortMode: 'none'
    }),
    new MiniCssExtractPlugin({
      filename: 'static/style/[name]_[chunkhash:8].min.css',
      chunkFilename: 'static/style/[name]_[chunkhash:8].min.css'
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, '../src/lib/ueditor'),
      to: path.resolve(__dirname, '../dist/ueditor')
    }])
  ]
};
