console.log("Welcome to Tic tac Toe");
let audioTurn=new Audio("ting.mp3");
let gameOver=new Audio("gameOver.mp3");
let music=new Audio("music.mp3");
let turnO=true;
let gameInfo=document.querySelector(".game-info");
let winnerName=document.querySelector(".winnerName");
let count=0;
let reset=document.querySelector("#reset");
let container=document.querySelector(".container");
let winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let boxes=document.querySelectorAll(".box");
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        count++;
        console.log(count);
        if(count>=9){
            gameInfo.style.display="unset";
            winnerName.innerText="Game Draw! Please reset the game";
            gameOver.play();
            container.classList.add("hide");
        }else{
            audioTurn.play();
            if(turnO){
                box.style.color="#B8390E";
                box.innerText="O";
                turnO=false;
            }else{
                box.style.color="#3B0918";
                box.innerText="X";
                turnO=true;
            }
            checkWinner();  
        }
        box.disabled=true;
    })
})

const checkWinner=()=>{
    for(let pattern of winPatterns){
        let position1Value=boxes[pattern[0]].innerText;
        let position2Value=boxes[pattern[1]].innerText;
        let position3Value=boxes[pattern[2]].innerText;
        if((position1Value!=0) && (position2Value!=0)&&(position3Value!=0)){
            if(position1Value===position2Value && position2Value===position3Value){
                showWinner(position1Value);
            }
        }
    }
}
const showWinner=(winner)=>{
    winnerName.innerText=`Winner is ${winner}`;
    gameInfo.style.display="unset";
    boxes.forEach((box)=>{
        box.disabled=true;
    })
    music.currentTime=23;
    music.play();
}
function enableButton(){
    boxes.forEach((box)=>{
        box.disabled=false;
    })
}
reset.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerText="";
        gameInfo.style.display="none";
        count=0;
        turnO=0;
        enableButton();
        music.pause();
        music.currentTime=0;
        container.classList.remove("hide");
    })
})