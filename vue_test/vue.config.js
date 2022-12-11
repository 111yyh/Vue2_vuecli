module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
    },
  },
  lintOnSave:false, //关闭语法检查
  //开启代理服务器(方式1)
  // devServer:{
  //   proxy:'http://localhost:5000'
  // }

  //开启代理服务器(方式2)
  devServer: {
    proxy: {
      '/atguigu': {
        target: 'http://localhost:5000',
        pathRewrite:{'^/atguigu':''},
        ws: true,//用于支持WebSocket
        changeOrigin: true//用于控制请求头中的Host值
      },
      '/demo': {
        target: 'http://localhost:5001',
        pathRewrite:{'^/demo':''},
        ws: true,//用于支持WebSocket
        changeOrigin: true//用于控制请求头中的Host值
      }
    }
  }
}