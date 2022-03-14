const options = {
    "rock": "paper",
    "paper": "scissors",
    "scissors": "rock"
}

function computeRound(selection) {
    let counter = options[selection]
    let computerSelection = computerPlay()
    let result = computerSelection != counter && computerSelection != selection

    return [result, selection, computerSelection]

}

function computerPlay() {
    return Object.keys(options)[Math.floor(Math.random() * Object.keys(options).length)]
}

function playRound(selection) {
    let results = computeRound(selection.toLowerCase())
    console.log(`Opponent played ${results[2]} while you played ${results[1]}, you ${results[0] && "won!" || "lost."}`)
}
