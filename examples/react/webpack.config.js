const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

const clientConfig = {
    entry: [
      'react-hot-loader/patch',
      './client/main.jsx'
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        }
      ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './client/main.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      filename: 'bundle.client.js'
    },
    devServer: {
      contentBase: './dist',
      hot: true
    }
  };

const serverConfig = {
    entry: [
        './server/main.js'
    ],
    output: {
      path: path.resolve(__dirname, '/dist'),
      filename: 'bundle.server.js'
    },
    target: 'node',
    externals: [nodeExternals()],
    devServer: {
      hot: true
    }
};

module.exports = [clientConfig, serverConfig];
