// @flow

const jsonUtils = require('./tools/json-utils').default
const path = require('path')
const merge = require('lodash.merge')

let _config
const readConfig = function() {
  if (!_config) {
    const env = process.env.NODE_ENV || 'development'
    const config = jsonUtils.readJson(path.resolve(__dirname, 'config.json'))
    _config = merge({
      env,
      isProduction: env === 'production',
      isDevel: env === 'development',
      isTest: env === 'test'
    }, config)
    if (_config.isDevel) {
      _config = merge(_config, jsonUtils.readJson(path.resolve(__dirname, 'devel.json')))
    } else if (_config.isTest) {
      _config = merge(_config, jsonUtils.readJson(path.resolve(__dirname, 'test.json')))
    }
  }
  return _config
}
exports.default = readConfig()
