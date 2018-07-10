module.exports = {
  plugins: [
    require('postcss-import')(),
    // require('postcss-url')({ url: 'inline' }),
    // require('postcss-px2units')({ comment: 'NO_RPX' }),
    require('postcss-cssnext')(),
    // require('postcss-preset-env')({
    //   stage: 2,
    //   browsers: 'last 2 versions',
    // }),
  ],
}
