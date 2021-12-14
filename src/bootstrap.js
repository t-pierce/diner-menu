const entreeMenu = {
    'BLT': 7,
    'Double Cheeseburger': 8,
    'Steak': 14
        
}

const sideMenu = {
    'Fruit Salad': 3,
    'Fries': 4,
    'Salad': 4
}

const entreeComments = { 
    'Cheese Burger': 'Our most popular item', 
    'BLT': 'You wont be disappointed', 
    'Steak': 'The best in town' 
}

const sideComments = { 
    'Fruit Salad': 'Made with fresh fruit', 
    'Salad': 'Good choice', 
    'Fries': 'Fries are well seasoned'
}

const menuItems = menu => {
    let menuString = []
    Object.keys(menu).map(item => {
      menuString.push(` ${item}`)
    })
    return menuString.join()
}


alert(`Welcome to Bottega Diner! What can I get for you today?`)

const entreeChoice = prompt (`What entree would you like`)

alert(`${entreeComments[entreeChoice]}`)
alert(`${entreeChoice} is $${entreeMenu[entreeChoice]}`)

const sideChoice = prompt(`What would you like for your side?`)

alert(`${sideComments[sideChoice]}`)
alert(`${sideChoice} is $${sideMenu[sideChoice]}`)

const sideChoiceTwo = prompt(`What would your second side be?`)

alert(`${sideComments[sideChoiceTwo]}`)
alert(`${sideChoiceTwo} is $${sideMenu[sideChoiceTwo]}`)

const total = (entreeMenu[entreeChoice] + sideMenu[sideChoice] + sideMenu[sideChoiceTwo])

alert(`The total for ${entreeChoice}, ${sideChoice} and ${sideChoiceTwo} will be ${total}.`)