const pelo = require('.')
const createApp = require('./app')

const belApp = createApp()
console.log('# bel output')
console.log(belApp.render().toString())

pelo.replace('bel')
const peloApp = createApp()
console.log('# pelo output')
console.log(peloApp.render().toString())
