/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const rules = require('./webpack.rules');

function srcPaths(src) {
  return path.join(__dirname, src);
}

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  target: 'electron-main',
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  entry: './src/main/main.ts',
  // Put your normal webpack config below here
  module: {
    rules
  },
  resolve: {
    alias: {
      '@main': srcPaths('src/main'),
      '@renderer': srcPaths('src/renderer'),
      '@stores': srcPaths('src/stores'),
      '@helpers': srcPaths('src/helpers'),
      '@components': srcPaths('src/renderer/components'),
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json']
  },
};
