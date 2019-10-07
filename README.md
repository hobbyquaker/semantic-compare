# semantic-compare

[![NPM version](https://badge.fury.io/js/semantic-compare.svg)](http://badge.fury.io/js/semantic-compare)
[![Dependencies Status](https://david-dm.org/hobbyquaker/semantic-compare/status.svg)](https://david-dm.org/hobbyquaker/semantic-compare)
[![Build Status](https://travis-ci.org/hobbyquaker/semantic-compare.svg?branch=master)](https://travis-ci.org/hobbyquaker/semantic-compare)
[![Coverage Status](https://coveralls.io/repos/github/hobbyquaker/semantic-compare/badge.svg?branch=master)](https://coveralls.io/github/hobbyquaker/semantic-compare?branch=master)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![License][mit-badge]][mit-url]

> Compare version strings according to [Semantic Versioning 2.0.0](https://semver.org/)

## Example

```javascript
const semverCompare = require('semantic-compare');

console.log([
    '1.0.0-alpha.1',
    '1.0.0-beta',
    '1.0.0',
    '1.0.0-alpha.beta',
    '1.0.0-rc.1',
    '1.0.0-beta.2',
    '1.0.0-alpha',
    '1.0.0-beta.11'
].sort(semverCompare));

```

Output:

```javascript
[ '1.0.0-alpha',
  '1.0.0-alpha.1',
  '1.0.0-alpha.beta',
  '1.0.0-beta',
  '1.0.0-beta.2',
  '1.0.0-beta.11',
  '1.0.0-rc.1',
  '1.0.0' ]
```

## License

MIT (c) Sebastian Raff

[mit-badge]: https://img.shields.io/badge/License-MIT-blue.svg?style=flat
[mit-url]: LICENSE