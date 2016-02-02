[![npm version](https://badge.fury.io/js/pkg-env.svg)](https://badge.fury.io/js/pkg-env)
[![Build status](https://travis-ci.org/gswalden/pkg-env.svg?branch=master)](https://travis-ci.org/gswalden/pkg-env)
[![Dependencies](https://david-dm.org/gswalden/pkg-env.svg)](https://david-dm.org/gswalden/pkg-env)

### Install
```sh
npm install --save pkg-env
```

### Use
```js
const pkgEnv = require('pkg-env');
console.log(pkgEnv);
/*
{
  env: 'dev',
  isDev: true,
  isStaging: false,
  isTest: false,
  isProd: false,
  version: '1.0.0'
}
*/

```

### Thanks
This package is a simple consolidation of two packages, [get-env](https://www.npmjs.com/package/get-env)
and [load-pkg](https://www.npmjs.com/package/load-pkg), whose authors deserve
all the credit!
