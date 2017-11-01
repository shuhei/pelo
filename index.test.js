'use strict'

const createApp = require('./app')
const pelo = require('.')
const test = require('ava')
const minify = require('html-minifier').minify
const minifyConfig = {
  collapseWhitespace: true
}

test('app renders as expected', t => {
  const expected = minify(createApp().render().toString(), minifyConfig)
  pelo.replace('bel')
  const actual = minify(createApp().render().toString(), minifyConfig)
  t.is(actual, expected)
})
