const path = require('path')

module.exports = {
  publicPath: "/web/ifapp/",
  outputDir: "ifapp",
  devServer: {
    proxy: {
      "/api": {
        target: "http://springboot.test:8080",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          hack: `true; @import "${path.join(
            __dirname,
            './src/assets/less/variables.less'
          )}";`
        }
      }
    }
  }
}
