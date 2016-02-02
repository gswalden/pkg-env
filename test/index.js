'use strict';

process.env.NODE_ENV = 'test';

const chai = require('chai')
  , should = chai.should()
  , pkgEnv = require('../')
  , pkg    = require('../package')
  ;

describe('pkg-env tests', () => {
  it('should return an object', () => {
    pkgEnv.should.be.an('object');
  });

  it('env should be accurate', () => {
    pkgEnv.env.should.eq(process.env.NODE_ENV);
  });

  it('booleans should reflect "test" environment', () => {
    pkgEnv.isDev.should.be.false;
    pkgEnv.isStaging.should.be.false;
    pkgEnv.isProd.should.be.false;
    pkgEnv.isTest.should.be.true;
  });

  it('version should be accurate', () => {
    pkgEnv.version.should.eq(pkg.version);
  });
})
