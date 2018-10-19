var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.buildproduction.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  })
}
