const path = require('path');
const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin');

/**
 * @type {import('webpack/declarations/WebpackOptions').WebpackOptions}
 */
module.exports = {
  entry: `./src`,
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
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  plugins: [
    new WasmPackPlugin({
      crateDirectory: path.resolve(__dirname, 'src/crate'),
      outDir: path.resolve(__dirname, 'src/crate/pkg'),
    }),
  ],
  devtool: 'source-map',
};
