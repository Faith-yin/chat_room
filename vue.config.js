/*
 * @Date: 2020-09-22 18:46:06
 * @information: vue-cli 3.x 配置
 */
module.exports = {
  devServer: {
    hot: true,
    host: '0.0.0.0',
    port: 8099,
    open: true,
    // proxy: {

    // },
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  // 是否使用包含运行时编译器的 Vue 构建版本
  runtimeCompiler: true

  
}