module.exports = {
  publicPath: "/ifapp/",
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
  }
}
