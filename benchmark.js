const bel = require('bel')
const stringify = require('./html')
const createApp = require('./app')

const iteration = 1000;

const strApp = createApp(stringify)
console.time('stringify')
for (let i = 0; i < iteration; i++) {
  strApp.render()
}
console.timeEnd('stringify')
console.log(strApp.render())

const belApp = createApp(bel)
console.time('bel')
for (let i = 0; i < iteration; i++) {
  belApp.render().toString()
}
console.timeEnd('bel')
console.log(belApp.render().toString())
