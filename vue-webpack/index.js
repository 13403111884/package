#!/usr/bin/env node
require('babel-register') ({
  presets: [ 'env' ]
})

module.exports = require('./bin/yi-vue-webpack')