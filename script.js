let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");



let genCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    let randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}


let drawGame = () => {
    console.log("game was draw.");
    msg.innerText = "Game Tie! Play again"
    msg.style.color = "blue";
}


let showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your "${userChoice}" beats "${compChoice}".`;
        msg.style.color = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost. "${compChoice}" beats your "${userChoice}".`;
        msg.style.color = "red";
    }
}


let playGame = (userChoice) => {

    // Generate computer choice
    let compChoice = genCompChoice();
    console.log("Comp choice =", compChoice);

    if(userChoice === compChoice) {
        // Draw Game
        drawGame();
    } else {
        let userWin = true;

        if(userChoice === "rock") {
            // scissor, paper
            userWin = compChoice === "paper" ? false : true;
        } 
        else if(compChoice === "paper") {
            // rock, scissor
            userWin = userChoice === "scissors" ? false : true; 
        } 
        else {
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});