const { override, fixBabelImports, overrideDevServer, useBabelRc } = require('customize-cra')
const devServerConfig = () => (config) => {
  return {
    ...config,
    port: 3000,
    proxy: {
      '/api': {
        target: '',
        changeOrigin: true,
        ws: false,
        secure: false,
      },
    },
  }
}

module.exports = {
  webpack: override(
    useBabelRc(),
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    })
  ),
  devServer: overrideDevServer(devServerConfig()),
}
