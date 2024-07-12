let gameSeq = [];
let userSeq = [];
let btns = ["red","blue","green","yellow"];
let level = 0;
let started = false;
let h3 = document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(started == false){
        started = true;

        levelUp();
    }
})

function levelUp(){
    userSeq = [];   
    level++;
    h3.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    divFlash(randBtn);
}

function divFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200)
}

function btnPress(){
    let btn = this;
    divFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);

}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h3.innerHTML = `Game Over, <b>Your Score is ${level} </b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150)
        reset();
    }
}

let allBtn = document.querySelectorAll(".div-btn");
for(btn of allBtn){
    btn.addEventListener("click",btnPress)
}

function reset(){
    gameSeq = [];
    userSeq = [];
    level = 0;
    started = false;
}