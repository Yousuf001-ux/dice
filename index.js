let firstDot = document.querySelector(".dot1")
let secondDot = document.querySelector(".dot2")
let thirdDot = document.querySelector(".dot3")
let fourthDot = document.querySelector(".dot4-hidden")
let fifthDot = document.querySelector(".dot5")
let sixthDot = document.querySelector(".dot6")
let seventhDot = document.querySelector(".dot7")

let dotOne = document.querySelector("dot-one")
let dotTwo = document.querySelector("dot-two")
let dotThree = document.querySelector("dot-three")
let dotFour = document.querySelector("dot-four-hidden")
let dotFive = document.querySelector("dot-five")
let dotSix = document.querySelector("dot-six")
let dotSeven = document.querySelector("dot-seven")

let rollDice = document.querySelector("button")

let firstNumbers = ["one","two","three","four","five","six", "seven"]
let secondNumbers = ["eight","nine","ten","eleven","twelve","thirteen"]

rollDice.addEventListener("click", (event)=>{
    let randomOne = firstNumbers[Math.floor(Math.random()*firstNumbers.length)] 
    let randomTwo = secondNumbers[Math.floor(Math.random()*secondNumbers.length)]

    let diceNumber = [randomOne,randomTwo]
    console.log(diceNumber);
    
    if(diceNumber.includes("one")){
        // One
        firstDot.classList.remove("dot1")
        firstDot.classList.add("dot1-hidden")
        secondDot.classList.remove("dot2")
        secondDot.classList.add("dot2-hidden")
        thirdDot.classList.remove("dot3")
        thirdDot.classList.add("dot3-hidden")
        fourthDot.classList.remove("dot4-hidden")
        fourthDot.classList.add("dot4-visible")
        fifthDot.classList.remove("dot5")
        fifthDot.classList.add("dot5-hidden")
        sixthDot.classList.remove("dot6")
        sixthDot.classList.add("dot6-hidden")
        seventhDot.classList.remove("dot7")
        seventhDot.classList.add("dot7-hidden")
    }
    
    // Two
    if(diceNumber.includes("two")){
        
    }
})
