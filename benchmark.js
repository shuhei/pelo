const bel = require('bel')
const stringify = require('.')
const createApp = require('./app')

const iteration = 1000;

const strApp = createApp(stringify)
const belApp = createApp(bel)
console.log('# stringify output')
console.log(strApp.render().toString())
console.log('# bel output')
console.log(belApp.render().toString())
console.log('# benchmark')
console.time('stringify')
for (let i = 0; i < iteration; i++) {
  strApp.render().toString()
}
const a = console.timeEnd('stringify')

console.time('bel')
for (let i = 0; i < iteration; i++) {
  belApp.render().toString()
}
console.timeEnd('bel')
