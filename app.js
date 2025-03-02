let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let player = document.querySelector("#player");
let turn0 = true;
let count = 0;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    count = 0;
    player.innerText = `Player: O`;
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        count++;
        if (turn0) {
            box.style.color = "#048A81";
            box.innerText = "O";
            turn0 = false;
        } else {
            box.style.color = "#FF5A5F";
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        changePlayer();
        checkDraworWinner();
    });
});
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const changePlayer = () => {
    if (turn0) {
        player.innerText = `Player: O`;
    } else {
        player.innerText = `Player: X`;
    }
}
const showWinner = (winner) => {
    msg.innerText = `Conguratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    player.innerText = `winner is ${winner}`;
}

const showDraw = () => {
    msg.innerText = "Oops!, It was a Draw...";
    player.innerText = `Game Draw!`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkDraworWinner = () => {
    let winnerFound = false;
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos1Val === pos2Val && pos2Val === pos3Val) {
            winnerFound = true;
            showWinner(pos1Val);
            break;
        } else {
            winnerFound = false;
            if (winnerFound === false && count === 9) {
                showDraw();
            }
        };
    }
};
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);