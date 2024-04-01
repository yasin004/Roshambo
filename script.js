let myScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".box");

const genComchoice = () => {
    const option = ["stone", "paper", "scissor"];
    const random = Math.floor(Math.random() * 3)
    return option[random];

}
let myPoints = document.querySelector("#yr-score")
let comPoints = document.querySelector("#com-score")
let msg = document.querySelector("#msg")


const showWinner = (userwin , userchoice, comChoice) => {
    if (userwin) {
        console.log("YOU WON!")
        msg.innerText = `YOU WON! Your ${userchoice} beats opponent ${comChoice}`
        myScore++;
        myPoints.innerText = myScore;
        msg.style.backgroundColor = "green"

    } else {
        console.log("YOU LOOSE")
        msg.innerText = `YOU LOOSE. Opponent ${comChoice} beats your ${userchoice}`
        comScore++;
        comPoints.innerText = comScore;
        msg.style.backgroundColor = "red"
    }

}
const playGame = (userchoice) => {
    console.log("user choise = ", userchoice)
    const comChoice = genComchoice();
    console.log("computer choise = ", comChoice)

    if (userchoice === comChoice) {
        console.log("it's a draw");
        msg.innerText = "It's a draw , play again."
        msg.style.backgroundColor = "black"
    }

    else {
        let userwin = true;
        if (userchoice === "stone") {
            userwin = comChoice === "scissor" ? false : true;
        }


        else if (userchoice === "paper") {

            userwin = comChoice === "stone" ? true : false
        }
        else {
            userwin = comChoice === "stone" ? false : true;
        }

        showWinner(userwin , userchoice,comChoice);
    }


};
choices.forEach((box) => {
    box.addEventListener("click", () => {
        const userchoice = box.getAttribute("id")
        playGame(userchoice)
    })
})
