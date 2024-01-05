let firstCard = 8
let secondCard = 10
let cards = [ firstCard , secondCard]
let hasBlackJack = false

let sum = firstCard + secondCard 
let stilAlive = true


let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
console.log(sumEl)


 function startGame() {
     renderGame()
 }

let message = ""
function renderGame() {
        cardsEl.textContent = "Cards; " + cards[0]+ " " + cards[1]
        sumEl.textContent = "Sum: " + sum      
            if (sum <= 20) {
            message = "Do You Want another card"
        } else if (sum === 21) {
            message = " black jack "
            hasBlackJack = true
        } else  {
            message = " You Lost"
            stilAlive = false
        }
        messageEl.textContent = message
}


function newCard() {
    console.log("newCard clicekkk")
    
    let card = 1
    
     sum += card
    
    renderGame()
    
}
 

  