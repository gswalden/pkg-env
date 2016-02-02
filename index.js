'use strict';

const env = require('get-env')(['staging', 'test']);

module.exports = {
  env,
  isDev: env === 'dev',
  isStaging: env === 'staging',
  isTest: env === 'test',
  isProd: env === 'prod',
  version: process.env.npm_package_version || require('load-pkg').sync().version
};
