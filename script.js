let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGame = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

 
let x = "X";
const resetGame = () => {
  x = "x";
  for (box of boxes) {
    box.disabled = false  ;
    box.innerText = "";
  msgContainer.classList.add("hide");

  }
};
const WinPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const showWinner = (win) => {
  msg.innerText = "Congratulations, " + win + " is Winner";
  msgContainer.classList.remove("hide");
};

const disabledBox = () => {
  for (box of boxes) {
    box.disabled = true;
  }
};
const checkWinner = () => {
  for (let pattern of WinPatterns) {
    let pv1 = boxes[pattern[0]].innerText;
    let pv2 = boxes[pattern[1]].innerText;
    let pv3 = boxes[pattern[2]].innerText;

    if (pv1 !== "" && pv2 !== "" && pv3 !== "") {
      if (pv1 === pv2 && pv2 === pv3) {
        disabledBox();
        showWinner(pv1);
      }
    }
  }
};
const checkDraw = () => {
  let count = 0;
  for (box of boxes) {
    if (box.innerText !== "") {
      count++;
    }
  }
  if (count === 9) {
    msg.innerText = "It's a draw!";
    msgContainer.classList.remove("hide");
    disabledBox();
  }
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    x = x === "X" ? "O" : "X";
    box.innerText = x;
    box.disabled = true;
    checkWinner();
    checkDraw();
  });
});
newGame.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
