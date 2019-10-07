# semantic-compare



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
