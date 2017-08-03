'use strict'

const Module = require('module')

var BOOL_PROPS = [
  'autofocus', 'checked', 'defaultchecked', 'disabled', 'formnovalidate',
  'indeterminate', 'readonly', 'required', 'selected', 'willvalidate'
]

var BOOL_PROP_PATTERN = new RegExp(' (' + BOOL_PROPS.join('|') + ')=(""|\'\')', 'ig')

function handleValue (value) {
  if (Array.isArray(value)) {
    // Suppose that each item is a result of html``.
    return value.join('')
  }
  // Ignore event handlers.
  //     onclick=${(e) => doSomething(e)}
  // will become
  //     onclick=""
  if (typeof value === 'function') {
    return '""'
  }
  if (value === null || value === undefined || value === false) {
    return ''
  }
  if (value.__encoded) {
    return value
  }
  const str = value.toString()
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

function stringify () {
  var pieces = arguments[0]
  var output = ''
  for (var i = 0; i < pieces.length; i++) {
    output += pieces[i]
    if (i < pieces.length - 1) {
      output += handleValue(arguments[i + 1])
    }
  }
  output = output.replace(BOOL_PROP_PATTERN, '')
  // HACK: Avoid double encoding by marking encoded string
  // You cannot add properties to string literals
  // eslint-disable-next-line no-new-wrappers
  const wrapper = new String(output)
  wrapper.__encoded = true
  return wrapper
}

function replace(moduleId) {
  const originalRequire = Module.prototype.require
  Module.prototype.require = function (id) {
    if (id === moduleId) {
      return stringify
    } else {
      return originalRequire.apply(this, arguments)
    }
  }
}
stringify.replace = replace

module.exports = stringify
