const gamedict = ["rock", "paper", "scissors"];

function getComputerChoice(){
    return Math.floor(Math.random()*3)+1;
}

function getUserChoice(){
    let answer = prompt("Choose rock, paper, or scissors", "rock").toLowerCase();
    return gamedict.indexOf(answer)+1;
}

function playAGame(playerSelection, computerSelection){
    let result = (((computerSelection - playerSelection)%3)+3)%3;
    if(result == 1){
        console.log("computer wins");
        return -1;
    }
    else if (result == 0) {
        console.log("tied");
        return 0;
    }
    else {
        console.log("user wins");
        return 1;
    }
}

function runGame(){
    let pW = 0;
    let cW = 0;
    let tie = 0;
    for(let i = 0; i < 5; i++){
        let pS = getUserChoice();
        let cS = getComputerChoice();
        console.log("Player chose: " + gamedict[pS-1]);
        console.log("Computer chose: " + gamedict[cS-1]);
        let outcome = playAGame(pS,cS);
        if(outcome == 1){
            pW += 1;
        } else if (outcome == 0){
            cW += 1;
        }else{
            tie +=1;
        }
    }
    console.log(pW + " " + cW + " " + tie);
}

runGame();
