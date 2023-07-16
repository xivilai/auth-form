const { resolve } = require('path');

module.exports = {
  resolve: {
    alias: [
      {
        find: /^@\/(.+)/,
        replacement: resolve(__dirname, 'src/$1')
      }
    ]
  }
};
