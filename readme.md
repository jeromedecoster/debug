# Debug

<a href="https://github.com/visionmedia/debug" target="_blank">debug</a> rewritten to fit to my taste — node.js only

## Install

Install with <a href="https://docs.npmjs.com/cli/install" target="_blank">npm</a> directly from the <a href="https://github.com/jeromedecoster/debug" target="_blank">github repository</a>

```
npm install jeromedecoster/debug
```

Install from a <a href="https://docs.npmjs.com/files/package.json#github-urls" target="_blank">package.json</a> file

```json
{
  "dependencies": {
    "debug": "jeromedecoster/debug"
  }
}
```

## Example

```js
const debug = require('debug')('test')

debug('lorem ipsum dolor sit amet')
debug('lorem', 'ipsum', 'dolor', 'sit', 'amet')

debug.red('lorem ipsum dolor sit amet')
debug.blue('lorem ipsum dolor sit amet')
debug.cyan('lorem ipsum dolor sit amet')
debug.gray('lorem ipsum dolor sit amet')
debug.green('lorem ipsum dolor sit amet')
debug.white('lorem ipsum dolor sit amet')
debug.yellow('lorem ipsum dolor sit amet')
debug.magenta('lorem ipsum dolor sit amet')
```

## Thanks

Mainly forked / inspired by <a href="https://github.com/visionmedia/debug" target="_blank">debug</a>

## License

MIT
