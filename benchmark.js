'use strict'

const pelo = require('.')
const createApp = require('./app')

const warmup = 100
const iteration = 10000

console.log(`# benchmark ${iteration} iterations`)

const belApp = createApp()
for (let i = 0; i < warmup; i++) {
  belApp.render().toString()
}
console.time('bel')
for (let i = 0; i < iteration; i++) {
  belApp.render().toString()
}
console.timeEnd('bel')

pelo.replace('bel')
const peloApp = createApp()
for (let i = 0; i < warmup; i++) {
  peloApp.render().toString()
}
console.time('pelo')
for (let i = 0; i < iteration; i++) {
  peloApp.render().toString()
}
console.timeEnd('pelo')
