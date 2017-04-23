const bel = require('bel')
const stringify = require('./html')

let html;

function drinkView(drink) {
  return html`<li>${drink.name} is € ${drink.price}</li>`
}

function mainView (greeting, name, drinks) {
  return html`
    <div>
      <p>${greeting}, ${name}!</p>
      <ul>
        ${drinks.map(drinkView)}
      </ul>
    </div>
  `
}

const greeting = '<Hello>'
const name = 'HTML & CSS'
const drinks = [
    { name: 'cafe latte', price: 3.0 },
    { name: 'cappucino', price: 2.9 },
]
const iteration = 1000;

html = stringify
console.time('stringify')
for (let i = 0; i < iteration; i++) {
  mainView(greeting, name, drinks)
}
console.timeEnd('stringify')
console.log(mainView(greeting, name, drinks))

html = bel
console.time('bel')
for (let i = 0; i < iteration; i++) {
  mainView(greeting, name, drinks).toString()
}
console.timeEnd('bel')
console.log(mainView(greeting, name, drinks).toString())
