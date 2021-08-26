module.exports = {
    devServer: {
      proxy: {
        '^/v1': {
          target: "http://localhost:3000/api",
          ws: true,
          changeOrigin: true,
          pathRewrite: {
              "^/v1": ""
          }
        }
      }
    }
  }