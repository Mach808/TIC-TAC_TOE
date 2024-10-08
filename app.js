let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGame = document.querySelector("#new-btn");
let msg_container = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let count = 0;
 

let turnO = true;//playerX,playerO
const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [6,7,8],
    [3,4,5],
    [2,4,6],
];
const resetGame = () =>{
    turnO=true;
    enableBoxes();
    msg_container.classList.add("hide");

}
 

boxes.forEach((box) =>{
    box.addEventListener("click",() => {
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        count++;
        box.disabled= true;
        check_winner();
    });
});

const disableBoxes = () => {
    for (let box of boxes) {
      box.disabled = true;
    }
  };

  const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
      
    }
  };


const showWinner = (winner) =>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msg_container.classList.remove("hide");
    disableBoxes();
}

const check_winner = () =>{
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val == pos2Val && pos2Val == pos3Val){
                console.log("winner",pos1Val);
                showWinner(pos1Val);
            }
        }
    }
}

newGame.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
