/* eslint-disable */
const path = require("path");
module.exports = {
  assetsDir: 'assets/',
  publicPath: "",
  chainWebpack: config => {
    const imgRule = config.module.rule("images");
    // const fontsRule = config.module.rule("fonts");
    imgRule.use("file-loader")
      .loader("image-webpack-loader")
      .tap(options => {
        const ret = options || {};
        ret.mozjpeg = {
          progressive: true
        };
        ret.optipng = {
          enabled: false
        };
        ret.pngquant = {
          quality: [0.65, 0.90],
          speed: 4
        };
        ret.gifsicle = {
          interlaced: false
        };
        ret.webp = {
          quality: 75
        };
        ret.svgo = {
          quality: 75
        };
        return ret;
      });
  }
};