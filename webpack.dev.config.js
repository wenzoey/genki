const path = require('path');
const { HotMoudleReplacementPlugin, IgnorePlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

const config = {
  mode: 'development',
  entry: './src/main.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: false,
    hot: true,
    port: 6677,
    open: true,
    compress: true,
    overlay: true
  },
  watchOptions: {
    ignored: /node_modules/
  },
  plugin: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Hot Moudle Replacement',
      template: 'index.html'
    }),
    new IgnorePlugin(/^\.\/locale$/, /moment$/),
    new HotMoudleReplacementPlugin(),
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins:[
              '@babel/plugin-transform-runtime',
              ['import', {
                'libraryName': 'antd',
                'style': true
              }, 'antd']
            ]
          }
        }]
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(__dirname, './tsconfig.json'),
              appendTsSuffixTo: [/\.vue$/]
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', {
          loader: 'less-loader',
          options: {
            lessOptions: {
              modifyVars: {
                'primary-color': '#4608e2',
                'link-color': '#4608e2',
                'border-radius-base': '20px'
              },
              javascriptEnabled: true
            }
          }
        }]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts']
  }
};

module.exports = (env) => {
  console.log(`当前执行${env.mode}模式`);
  return config;
}