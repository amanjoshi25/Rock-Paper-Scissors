let user = 0;
let comp = 0;

let draw = 0;
const choices = document.querySelectorAll('.choice');
const msg = document.querySelector("#message");

const userS = document.querySelector("#user");
const compS = document.querySelector("#computer");
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"]
    const randIdx = Math.floor(Math.random() * 3)
    return options[randIdx]
};

const drawGame = () => {
    console.log("draw");
    msg.innerText = "Game was Draw play again";
    msg.style.backgroundColor = "rgb(228, 228, 16)";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        user++;
        userS.innerText = user;
        console.log("You Win");
        msg.innerText = `You Win ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        console.log("You Lose");
        comp++;
        compS.innerText = comp;
        msg.innerText = `You Lose ${compChoice} beats ${userChoice}`
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user Choice=", userChoice);
    const compChoice = genCompChoice();
    console.log(" cmp clicked", compChoice);
    if (userChoice === compChoice) {
        //draw game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice)
    }

};
choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        console.log(" user clicked", userChoice);
        playGame(userChoice);

        // const compChoice=genCompChoice();
        // console.log(" cmp clicked",compChoice);
        // const userChoice=choice.id;
        // const result=getResult(userChoice,compChoice);
        // showResult(result,compChoice);
    });
});