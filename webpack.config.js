const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const hello = 'hello';
const example = process.env.NAME || hello;
const tip = '使用 `NAME=[example-name] npm run example` 指定用例';

/**
 * @type {import('webpack/declarations/WebpackOptions').WebpackOptions}
 */
module.exports = {
  entry: `./src/examples/${example}/index.ts`,
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'build', example),
    publicPath: '/',
    filename: 'bundle.[contenthash].js',
  },
  plugins: [
    new HtmlWebpackPlugin(),
    {
      apply(compiler) {
        compiler.hooks.done.tapAsync('MyCustomPlugin', function (_compiler, callback) {
          if (!process.env.NAME) setTimeout(() => console.log(`\n${tip}`));
          callback();
        });
      },
    },
  ],
  devServer: {
    static: {
      directory: path.join('./build', example),
    },
    open: true,
    historyApiFallback: true,
  },
  devtool: 'source-map',
};
