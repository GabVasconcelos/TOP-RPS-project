const scoretext = document.querySelector(".score")
const lastplay = document.querySelector(".lastplay")
const buttons = document.querySelectorAll(".playbutton")
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
    const {selected, computerSelection, win, draw} = computeRound(selection)
    console.log(selected, computerSelection, win, draw)
    if (!draw) score[win && "player" || "bot"]++
    scoretext.innerHTML = `Score: <b> You: ${score.player} - Bot: ${score.bot} </b>`
    lastplay.innerHTML = `You played ${selected} while the opponent played ${computerSelection}, you ${draw && "drew." || win && "won!" || "lost."}`

    // return selected, comp, win, draw
}

function computeRound(selection) {
    let counter = options[selection.toLowerCase()]
    let computerSelection = computerPlay()
    let draw = computerSelection == selection
    let win = !draw && (selection == options[computerSelection])
    console.log(selection, computerSelection, draw, win)
    return {
        selected: selection,
        computerSelection: computerSelection,
        win: win,
        draw: draw
    }
}

function computerPlay() {
    return Object.keys(options)[Math.floor(Math.random() * Object.keys(options).length)]
}

function reset() {
    score.player = 0
    score.bot = 0
    scoretext.innerHTML = `Score: <b> You: ${score.player} - Bot: ${score.bot} </b>`
    lastplay.innerHTML = ""
}

buttons.forEach(element => {
    element.addEventListener("click", event => {
        playRound(event.target.innerHTML.toLowerCase())
    })
});