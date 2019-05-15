const path = require('path')

module.exports = {
  chainWebpack: config => {
    const apiClient = 'server' // mock or server
    config.resolve.alias.set(
      'api-client',
      path.resolve(__dirname, `src/api/${apiClient}`)
    ),
    config.module.rules.delete('eslint');
  }
}
