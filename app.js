let gameSq=[];
let userSq=[];
let highScore=0;
let h2=document.querySelector("h2");
let btns=["yellow","red","purple","green"];

let starter=false;
let level=0;

let h3=document.createElement("h3");
h2.insertAdjacentElement("beforebegin",h3);
h3.innerHTML=`<b>High-Score-${highScore}</br></b>`

document.addEventListener("keypress",function () {
     if(starter==false)
     {
        starter=true;
        levelUp();
     }
});

function btnFlash(btn){
   btn.classList.add("flash");
   setTimeout(function() {
      btn.classList.remove("flash");
   }, 200);
}
function levelUp()
{
    userSq=[]
    level++;
    h2.innerText=`Level ${level}`;

    let randIndex=Math.floor(Math.random()*3);

    randBtn=document.querySelector(`.${btns[randIndex]}`);

    gameSq.push(btns[randIndex]);
    // console.log(gameSq);

    btnFlash(randBtn);
}

function checkAns(idx)
{
    if(userSq[idx]===gameSq[idx]){
        if(userSq.length==gameSq.length)
          setTimeout(levelUp,200);
    }
    else{
       h2.innerHTML=`Game over!! Your score was <b>${level}<b> <br>Press any key to restart`;
       document.querySelector("body").style.backgroundColor="red";
       setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
       },200);
       if(highScore<level)
         highScore=level;
       h3.innerHTML=`<b>High-Score = ${highScore}</br></br></b>`
       reset();
    }
}

function buttonPress()
{
    let btn=this;
    btnFlash(btn);
    btnColor=btn.getAttribute("id");
    userSq.push(btnColor);
    checkAns(userSq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",buttonPress);
}

function reset(){
    starter=false;
    gameSq=[];
    userSq=[];
    level=0;
}