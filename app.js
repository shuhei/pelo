module.exports = function (html) {
  const greeting = "Hello"
  const name = "special characters, <, >, &"
  const drinks = [
      { name: "Cafe Latte", price: 3.0 },
      { name: "Cappucino", price: 2.9 },
      { name: "Club Mate", price: 2.2 },
      { name: "Berliner Weiße", price: 3.5 }
  ]

  const listeners = [];
  function onChange(listener) {
    listeners.push(listener)
  }
  function notifyChange() {
    listeners.forEach((listener) => listener())
  }

  function deleteDrink(drink) {
    const index = drinks.indexOf(drink)
    if (index >= 0) {
      drinks.splice(index, 1)
    }
    notifyChange()
  }

  function drinkView(drink, deleteDrink) {
    return html`
      <li>
        ${drink.name} is € ${drink.price}
        <a href="#" onclick=${() => deleteDrink(drink)}>Give me!</a>
      </li>
    `
  }

  function mainView (greeting, name, drinks, deleteDrink) {
    return html`
      <div>
        <p>${greeting}, ${name}!</p>
        ${drinks.length > 0 ? html`
          <ul>
            ${drinks.map(drink => drinkView(drink, deleteDrink))}
          </ul>
        ` : html`
          <p>All drinks are gone!</p>
        `}
      </div>
    `
  }

  function render() {
    return mainView(greeting, name, drinks, deleteDrink)
  }

  return {
    render: render,
    onChange: onChange
  }
}
