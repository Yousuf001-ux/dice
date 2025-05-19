let firstDot = document.querySelector(".dot1")
let secondDot = document.querySelector(".dot2")
let thirdDot = document.querySelector(".dot3")
let fourthDot = document.querySelector(".dot4-hidden")
let fifthDot = document.querySelector(".dot5")
let sixthDot = document.querySelector(".dot6")
let seventhDot = document.querySelector(".dot7")

let dotOne = document.querySelector(".dot-one")
let dotTwo = document.querySelector(".dot-two")
let dotThree = document.querySelector(".dot-three")
let dotFour = document.querySelector(".dot-four-hidden")
let dotFive = document.querySelector(".dot-five")
let dotSix = document.querySelector(".dot-six")
let dotSeven = document.querySelector(".dot-seven")

let rollDice = document.querySelector("button")

let firstNumbers = ["one","two","three","four","five","six", "seven"]
let secondNumbers = ["eight","nine","ten","eleven","twelve","thirteen", "fourteen"]

rollDice.addEventListener("click", (event)=>{
    let randomOne = firstNumbers[Math.floor(Math.random()*firstNumbers.length)] 
    let randomTwo = secondNumbers[Math.floor(Math.random()*secondNumbers.length)]

    let diceNumber = [randomOne,randomTwo]
    // console.log(diceNumber);
    
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
    else if(diceNumber.includes("two")){
        firstDot.classList.remove("dot1")
        firstDot.classList.add("dot1-hidden")
        secondDot.classList.remove("dot2-hidden")
        secondDot.classList.add("dot2")
        thirdDot.classList.remove("dot3")
        thirdDot.classList.add("dot3-hidden")
        fourthDot.classList.remove("dot4-visible")
        fourthDot.classList.add("dot4-hidden")
        fifthDot.classList.remove("dot5")
        fifthDot.classList.add("dot5-hidden")
        sixthDot.classList.remove("dot6-hidden")
        sixthDot.classList.add("dot6")
        seventhDot.classList.remove("dot7")
        seventhDot.classList.add("dot7-hidden")
    }
    // Three
    else if(diceNumber.includes("three")){
        firstDot.classList.remove("dot1")
        firstDot.classList.add("dot1-hidden")
        secondDot.classList.remove("dot2-hidden")
        secondDot.classList.add("dot2")
        thirdDot.classList.remove("dot3")
        thirdDot.classList.add("dot3-hidden")
        fourthDot.classList.remove("dot4-hidden")
        fourthDot.classList.add("dot4-visible")
        fifthDot.classList.remove("dot5")
        fifthDot.classList.add("dot5-hidden")
        sixthDot.classList.remove("dot6-hidden")
        sixthDot.classList.add("dot6")
        seventhDot.classList.remove("dot7")
        seventhDot.classList.add("dot7-hidden")
    }
    // Four
    else if(diceNumber.includes("four")){
        firstDot.classList.remove("dot1-hidden")
        firstDot.classList.add("dot1")
        secondDot.classList.remove("dot2-hidden")
        secondDot.classList.add("dot2")
        thirdDot.classList.remove("dot3")
        thirdDot.classList.add("dot3-hidden")
        fourthDot.classList.remove("dot4-visible")
        fourthDot.classList.add("dot4-hidden")
        fifthDot.classList.remove("dot5")
        fifthDot.classList.add("dot5-hidden")
        sixthDot.classList.remove("dot6-hidden")
        sixthDot.classList.add("dot6")
        seventhDot.classList.remove("dot7-hidden")
        seventhDot.classList.add("dot7")
    }
    // Five
    else if(diceNumber.includes("five")){
        firstDot.classList.remove("dot1-hidden")
        firstDot.classList.add("dot1")
        secondDot.classList.remove("dot2-hidden")
        secondDot.classList.add("dot2")
        thirdDot.classList.remove("dot3")
        thirdDot.classList.add("dot3-hidden")
        fourthDot.classList.remove("dot4-hidden")
        fourthDot.classList.add("dot4-visible")
        fifthDot.classList.remove("dot5")
        fifthDot.classList.add("dot5-hidden")
        sixthDot.classList.remove("dot6-hidden")
        sixthDot.classList.add("dot6")
        seventhDot.classList.remove("dot7-hidden")
        seventhDot.classList.add("dot7")
    }
    // Six
    else if(diceNumber.includes("six")){
        firstDot.classList.remove("dot1-hidden")
        firstDot.classList.add("dot1")
        secondDot.classList.remove("dot2-hidden")
        secondDot.classList.add("dot2")
        thirdDot.classList.remove("dot3-hidden")
        thirdDot.classList.add("dot3")
        fourthDot.classList.remove("dot4-visible")
        fourthDot.classList.add("dot4-hidden")
        fifthDot.classList.remove("dot5-hidden")
        fifthDot.classList.add("dot5")
        sixthDot.classList.remove("dot6-hidden")
        sixthDot.classList.add("dot6")
        seventhDot.classList.remove("dot7-hidden")
        seventhDot.classList.add("dot7")
    }
    // Seven
    else if(diceNumber.includes("seven")){
        firstDot.classList.remove("dot1-hidden")
        firstDot.classList.add("dot1")
        secondDot.classList.remove("dot2-hidden")
        secondDot.classList.add("dot2")
        thirdDot.classList.remove("dot3-hidden")
        thirdDot.classList.add("dot3")
        fourthDot.classList.remove("dot4-visible")
        fourthDot.classList.add("dot4-hidden")
        fifthDot.classList.remove("dot5-hidden")
        fifthDot.classList.add("dot5")
        sixthDot.classList.remove("dot6-hidden")
        sixthDot.classList.add("dot6")
        seventhDot.classList.remove("dot7-hidden")
        seventhDot.classList.add("dot7")
    }
    else {
        firstDot.classList.remove("dot1-hidden")
        firstDot.classList.add("dot1")
        secondDot.classList.remove("dot2-hidden")
        secondDot.classList.add("dot2")
        thirdDot.classList.remove("dot3-hidden")
        thirdDot.classList.add("dot3")
        fourthDot.classList.remove("dot4-visible")
        fourthDot.classList.add("dot4-hidden")
        fifthDot.classList.remove("dot5-hidden")
        fifthDot.classList.add("dot5")
        sixthDot.classList.remove("dot6-hidden")
        sixthDot.classList.add("dot6")
        seventhDot.classList.remove("dot7-hidden")
        seventhDot.classList.add("dot7")
    }
    
    // Eight
    if(diceNumber.includes("eight")){
        dotOne.classList.remove("dot-one")
        dotOne.classList.add("dot-one-hidden")
        dotTwo.classList.remove("dot-two")
        dotTwo.classList.add("dot-two-hidden")
        dotThree.classList.remove("dot-three")
        dotThree.classList.add("dot-three-hidden")
        dotFour.classList.remove("dot-four-hidden")
        dotFour.classList.add("dot-four-visible")
        dotFive.classList.remove("dot-five")
        dotFive.classList.add("dot-five-hidden")
        dotSix.classList.remove("dot-six")
        dotSix.classList.add("dot-six-hidden")
        dotSeven.classList.remove("dot-seven")
        dotSeven.classList.add("dot-seven-hidden")
    }
    // Nine
    else if(diceNumber.includes("nine")){
        dotOne.classList.remove("dot-one")
        dotOne.classList.add("dot-one-hidden")
        dotTwo.classList.remove("dot-two-hidden")
        dotTwo.classList.add("dot-two")
        dotThree.classList.remove("dot-three")
        dotThree.classList.add("dot-three-hidden")
        dotFour.classList.remove("dot-four-visible")
        dotFour.classList.add("dot-four-hidden")
        dotFive.classList.remove("dot-five")
        dotFive.classList.add("dot-five-hidden")
        dotSix.classList.remove("dot-six-hidden")
        dotSix.classList.add("dot-six")
        dotSeven.classList.remove("dot-seven")
        dotSeven.classList.add("dot-seven-hidden")
    }
    // Ten
    else if(diceNumber.includes("ten")){
        dotOne.classList.remove("dot-one")
        dotOne.classList.add("dot-one-hidden")
        dotTwo.classList.remove("dot-two-hidden")
        dotTwo.classList.add("dot-two")
        dotThree.classList.remove("dot-three")
        dotThree.classList.add("dot-three-hidden")
        dotFour.classList.remove("dot-four-hidden")
        dotFour.classList.add("dot-four-visible")
        dotFive.classList.remove("dot-five")
        dotFive.classList.add("dot-five-hidden")
        dotSix.classList.remove("dot-six-hidden")
        dotSix.classList.add("dot-six")
        dotSeven.classList.remove("dot-seven")
        dotSeven.classList.add("dot-seven-hidden")
    }
    // Eleven
    else if(diceNumber.includes("eleven")){
        dotOne.classList.remove("dot-one-hidden")
        dotOne.classList.add("dot-one")
        dotTwo.classList.remove("dot-two-hidden")
        dotTwo.classList.add("dot-two")
        dotThree.classList.remove("dot-three")
        dotThree.classList.add("dot-three-hidden")
        dotFour.classList.remove("dot-four-visible")
        dotFour.classList.add("dot-four-hidden")
        dotFive.classList.remove("dot-five")
        dotFive.classList.add("dot-five-hidden")
        dotSix.classList.remove("dot-six-hidden")
        dotSix.classList.add("dot-six")
        dotSeven.classList.remove("dot-seven-hidden")
        dotSeven.classList.add("dot-seven")
    }
    // Twelve
    else if(diceNumber.includes("twelve")){
        dotOne.classList.remove("dot-one-hidden")
        dotOne.classList.add("dot-one")
        dotTwo.classList.remove("dot-two-hidden")
        dotTwo.classList.add("dot-two")
        dotThree.classList.remove("dot-three")
        dotThree.classList.add("dot-three-hidden")
        dotFour.classList.remove("dot-four-hidden")
        dotFour.classList.add("dot-four-visible")
        dotFive.classList.remove("dot-five")
        dotFive.classList.add("dot-five-hidden")
        dotSix.classList.remove("dot-six-hidden")
        dotSix.classList.add("dot-six")
        dotSeven.classList.remove("dot-seven-hidden")
        dotSeven.classList.add("dot-seven")
    }
    // Thirteen
    else if(diceNumber.includes("thirteen")){
        dotOne.classList.remove("dot-one-hidden")
        dotOne.classList.add("dot-one")
        dotTwo.classList.remove("dot-two-hidden")
        dotTwo.classList.add("dot-two")
        dotThree.classList.remove("dot-three-hidden")
        dotThree.classList.add("dot-three")
        dotFour.classList.remove("dot-four-visible")
        dotFour.classList.add("dot-four-hidden")
        dotFive.classList.remove("dot-five-hidden")
        dotFive.classList.add("dot-five")
        dotSix.classList.remove("dot-six-hidden")
        dotSix.classList.add("dot-six")
        dotSeven.classList.remove("dot-seven-hidden")
        dotSeven.classList.add("dot-seven")

    }
    // Fourteen
    else if(diceNumber.includes("fourteen")){
        dotOne.classList.remove("dot-one-hidden")
        dotOne.classList.add("dot-one")
        dotTwo.classList.remove("dot-two-hidden")
        dotTwo.classList.add("dot-two")
        dotThree.classList.remove("dot-three-hidden")
        dotThree.classList.add("dot-three")
        dotFour.classList.remove("dot-four-visible")
        dotFour.classList.add("dot-four-hidden")
        dotFive.classList.remove("dot-five-hidden")
        dotFive.classList.add("dot-five")
        dotSix.classList.remove("dot-six-hidden")
        dotSix.classList.add("dot-six")
        dotSeven.classList.remove("dot-seven-hidden")
        dotSeven.classList.add("dot-seven")

    }
    else {
        dotOne.classList.remove("dot-one-hidden")
        dotOne.classList.add("dot-one")
        dotTwo.classList.remove("dot-two-hidden")
        dotTwo.classList.add("dot-two")
        dotThree.classList.remove("dot-three-hidden")
        dotThree.classList.add("dot-three")
        dotFour.classList.remove("dot-four-visible")
        dotFour.classList.add("dot-four-hidden")
        dotFive.classList.remove("dot-five-hidden")
        dotFive.classList.add("dot-five")
        dotSix.classList.remove("dot-six-hidden")
        dotSix.classList.add("dot-six")
        dotSeven.classList.remove("dot-seven-hidden")
        dotSeven.classList.add("dot-seven")

    }
})
