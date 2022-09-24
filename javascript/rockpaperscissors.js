const display = document.getElementById("gameresult");
const pscore = document.getElementById("playerscore");
const tscore = document.getElementById("tie");
const cscore = document.getElementById("computerscore");
const gamedict = ["rock", "paper", "scissors"];
let pW = 0;
let cW = 0;
let tie = 0;

function getComputerChoice(){
    return Math.floor(Math.random()*3)+1;
}

function getUserChoice(answer){
    return gamedict.indexOf(answer)+1;
}

function removeContent(element){
    var removecontent = element.querySelectorAll('*');
    removecontent.forEach((thing) => {element.removeChild(thing)});
}

function addContent(string, tag, element){
    var content = document.createElement(tag);
    content.textContent = string;
    element.appendChild(content);
}

function playAGame(playerSelection, computerSelection){
    var content = document.createElement('h1');
    let result = (((computerSelection - playerSelection)%3)+3)%3;
    removeContent(display);
    if(result == 1){
        addContent("Dang!","h1",display);
        return -1;
    }
    else if (result == 0) {
        addContent("Again!","h1",display);
        return 0;
    }
    else {
        addContent("Nice Play!","h1",display);
        return 1;
    }
}

function runGame(pvalue){
    cS = getComputerChoice();
    let outcome = playAGame(getUserChoice(pvalue),cS);
    if(outcome == 1){
        pW += 1;
        removeContent(pscore);
        addContent(pW,"h2",pscore)
    } else if (outcome == 0){
        cW += 1;
        removeContent(cscore);
        addContent(cW,"h2",cscore)
    }else{
        tie +=1;
        removeContent(tscore);
        addContent(tie,"h2",tscore)
    }
    if(pW == 5 || cW == 5){
        removeContent(display);
        if(pW == 5){
            addContent("You Win!","h1",display);
        }else{
            addContent("Computer Wins!","h1",display);
        }
        buttons.forEach((button)=>{button.style.visibility ='hidden';});
        return 0;
    }
    console.log(pW, cW, tie)
}

function resetGame(){
    pW = cW = tie = 0;
    removeContent(display);
    removeContent(pscore);
    removeContent(tscore);
    removeContent(cscore);
    addContent("Begin Game!","h1",display);
    addContent(pW,"h2",pscore);
    addContent(cW,"h2",tscore);
    addContent(tie,"h2",cscore);
    buttons.forEach((button)=>{button.style.visibility ='visible';});
}

const buttons = document.querySelectorAll('button.play');
buttons.forEach((button)=>{
    button.addEventListener('click',() => {
        runGame(button.id);
    })
});
const reset = document.querySelector('button.reset');
reset.addEventListener('click', () => {
    resetGame();
});