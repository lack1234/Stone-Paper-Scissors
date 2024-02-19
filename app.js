let userScore=0;
let compScore=0;


const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorepara=document.querySelector("#user_score");
const compScorepara=document.querySelector("#comp_score");


const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random() * 3);//it will  give  lessthan three random numbers
    return options[randIdx];
}

const drawGame=()=>{
    msg.innerText="Draw! Play again.";
    msg.style.backgroundColor="darkblue";


}


const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorepara.innerText=userScore;
       msg.innerText=`You Win! your ${userChoice} beats ${compChoice} `;
       msg.style.backgroundColor="green";
     
    }
    else{
        compScore++;
        compScorepara.innerText=userScore;

        console.log("computer win");
        msg.innerText=`You Lose.  ${compChoice} beats your ${userChoice} `;
        ;
        msg.style.backgroundColor="red";

    }
}
const playGame=(userChoice)=>{
console.log("user choice =",userChoice);
//Generate computer choice
const compChoice=genCompChoice();
console.log("comp choice =",compChoice);



if(userChoice=== compChoice){
    //draw game
    drawGame();
}else{
   
    let userWin=true;
    if(userChoice==="rock"){
        //scissors,paper
        userWin=compChoice==="paper"?false : true;
    }else if(userChoice==="paper"){
        //rock,scissors
        userWin=compChoice==="scissors"?false : true;
    }else {
        //rock,paper
       userWin= compChoice==="rock"?false : true;
    }
showWinner(userWin,userChoice,compChoice);

    }



}




choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
 // console.log("box was clicked! ",userChoice);
  playGame(userChoice);
    })
})
