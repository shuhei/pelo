const bel = require('bel')
const stringify = require('.')
const createApp = require('./app')

const iteration = 10000;

const strApp = createApp(stringify)
const belApp = createApp(bel)
console.log('# stringify output')
console.log(strApp.render().toString())
console.log('# bel output')
console.log(belApp.render().toString())
console.log(`# benchmark ${iteration} iterations`)

console.time('pelo')
for (let i = 0; i < iteration; i++) {
  strApp.render().toString()
}
console.timeEnd('pelo')

console.time('bel')
for (let i = 0; i < iteration; i++) {
  belApp.render().toString()
}
console.timeEnd('bel')
