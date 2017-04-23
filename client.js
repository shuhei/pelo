const bel = require('bel')
const nanomorph = require('nanomorph')

const createApp = require('./app')

const app = createApp(bel)

const root = document.getElementById('root')
const tree = root.firstElementChild
nanomorph(tree, app.render())
app.onChange(() => {
  nanomorph(tree, app.render())
})
