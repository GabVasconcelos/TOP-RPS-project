const scoretext = document.querySelector(".score")
const lastplay = document.querySelector(".lastplay")
const options = {
    "rock": "paper",
    "paper": "scissors",
    "scissors": "rock"
}

const score = {
    player: 0,
    bot: 0,
}

function playRound(selection) {
    let results = computeRound(selection.toLowerCase())
    if (!results[3]) score[results[2] && "player" || "bot"]++
    scoretext.innerHTML = `Score: <b> You: ${score.player} - Bot: ${score.bot} </b>`
    lastplay.innerHTML = `You played ${results[0]} while the opponent played ${results[1]}, you ${results[3] && "drew." || results[2] && "won!" || "lost."}`
    console.table(score)

    return results
    // return `You played ${results[0]} while the opponent played ${results[1]}, you ${results[2] && "won!" || "lost."}`
}

function computeRound(selection) {
    let counter = options[selection.toLowerCase()]
    let computerSelection = computerPlay()
    let result = computerSelection != counter && computerSelection != selection
    let draw = computerSelection == selection
    return [selection, computerSelection, result, draw]
}

function computerPlay() {
    return Object.keys(options)[Math.floor(Math.random() * Object.keys(options).length)]
}

function game() {
    for (let i=0; i<5; i++) {
        alert(playRound(prompt()))
    }
}

function clicked(arg) {
    playRound(arg)
}

// game()