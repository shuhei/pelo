# pelo (work in progress)

Lightning fast server-side rendering with tagged template literals

## Usage

**TBD**

```js
const html = require('pelo')

function helloView(name) {
  return html`<p>Hello, ${name}</p>`
}
```

## Benchmark

Rendering a simple view 10,000 times:

```js
node benchmark.js
```

|  tag | time (ms) |
| ---- | --------- |
| pelo |   193.871 |
|  bel |  2522.082 |

## Motivation

Server-side rendering with modern JavaScript frameworks is slow. In general, they focus on the client-side, and generate virtual/real DOMs for efficient DOM updates from templates. However, this approach is a bit overkill when we focus on server-side rendering. Because the templates already look like HTML, it should be faster if they directly render HTML strings without creating intermediate object representations.

With [`bel`](https://github.com/shama/bel), we can write HTML with tagged template literals and use them to create declarative views on browser. If we can use the same template also for directly generating HTML string on server-side, it will be a huge win.

## Thanks

Thanks [@yoshuawuyts](https://github.com/yoshuawuyts) for lots of advice!
