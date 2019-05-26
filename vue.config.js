const path = require('path')

module.exports = {
  chainWebpack: config => {
    config.resolve.alias.set(
      'api-client',
      path.resolve(__dirname, `src/api/server`)
    ),
    config.module.rules.delete('eslint');
  }
}
