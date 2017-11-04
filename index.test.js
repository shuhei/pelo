'use strict'

const createApp = require('./app')
const pelo = require('.')
const test = require('tape')
const minify = require('html-minifier').minify
const minifyConfig = {
  collapseWhitespace: true
}

test('The app renders as expected', t => {
  t.plan(1)
  const expected = minify(createApp().render().toString(), minifyConfig)
  pelo.replace('bel')
  const actual = minify(createApp().render().toString(), minifyConfig)
  t.is(actual, expected)
})
