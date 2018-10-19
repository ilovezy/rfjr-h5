var merge = require('webpack-merge')
var local = require('./local.env')
var uat = require('./uat.env')
var test = require('./test.env')
var production = require('./production.env')

module.exports = merge(local,test,uat,production, {
  NODE_ENV: '"development"'
})
