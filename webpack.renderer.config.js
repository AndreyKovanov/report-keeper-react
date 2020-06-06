/* eslint-disable @typescript-eslint/no-var-requires */
const rules = require('./webpack.rules');
const plugins = require('./webpack.plugins');
const path = require('path');

function srcPaths(src) {
  return path.join(__dirname, src);
}

module.exports = {
  mode: 'development',
  target: 'electron-renderer',
  devtool: 'source-map',
  module: {
    rules,
  },
  plugins: plugins,
  resolve: {
    alias: {
      '@main': srcPaths('src/main'),
      '@renderer': srcPaths('src/renderer'),
      '@stores': srcPaths('src/stores'),
      '@helpers': srcPaths('src/helpers'),
      '@components': srcPaths('src/renderer/components'),
      'react-dom': '@hot-loader/react-dom'
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json']
  },
};
