module.exports = {
  publicPath: './',
  outputDir:'dist',
  assetsDir:'assets',
  lintOnSave:false,
  runtimeCompiler:false,
  productionSourceMap:false,
  configureWebpack: {
    externals: {
       'AMap': 'AMap',
    }
}

};