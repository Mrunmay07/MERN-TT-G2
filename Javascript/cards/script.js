const card = document.querySelector('.card')
/* card.classList.add('active') */
const button = document.querySelector('button')

const input = document.querySelector('input')
const container = document.querySelector('.container')

const form = document.querySelector('form')

// Event Listeners

let count = 0;
button.addEventListener('click' , () => {
    count++;
   /*  count++;
    const newCard = card.cloneNode(true)
    newCard.innerText = count;
    container.appendChild(newCard) */
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count
    container.appendChild(newCard)
    console.log(newCard)
})

form.addEventListener('submit' , (e) => {
    e.preventDefault()
    console.log('From Submitted')
})

