const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");
const mole1 = document.querySelector(".mole1");
const mole2 = document.querySelector(".mole2");
const mole3 = document.querySelector(".mole3");
const mole4 = document.querySelector(".mole4");
const a1 = document.querySelectorAll(".angel");
let lastHole;
let timeUp = false;
var score = 0;
var count = 1;
var time;
// var angel = false;

function randomTime(min, max) {
    return Math.round(Math.random() * (max-min) + min);
}

function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole){
        console.log("Ugh... again?");
        return randomHole(holes);
    }
    lastHole = hole;
    return hole;
}

function peep() {
    time = randomTime(300, 1300);
    const hole = randomHole(holes);
    console.log(time, hole);
    hole.classList.add("up");
    setTimeout(() => {
         hole.classList.remove("up");
        if(!timeUp) peep();
    }, time);
}

function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    peep();
    setTimeout(() => timeUp = true, 10000);
    setTimeout(function() {
    document.getElementById("happy-mothers-day").style.display="block";}, 14000);
    setTimeout(function() {
    document.querySelector(".gameStart").style.display="none";}, 14000);
    setTimeout(function() {
    document.querySelector(".game").style.display="none";}, 14000);
    setTimeout(function() {
    document.querySelector(".resetGame").style.display="block";}, 14000);
};

function gameReset() {
  location.href = location.href;
};


function bonk(e) {
    score++;
    this.classList.remove("up");
    scoreBoard.textContent = score;
    console.log(e);
}

function bonka(e) {
  score = score - 1;
  console.log("bonka", score)
  this.classList.remove("up");
  scoreBoard.textContent = score;
  console.log(e);
}

moles.forEach(mole => mole.addEventListener("click", bonk));
a1.forEach(angel => angel.addEventListener("click", bonka));
mole1.addEventListener("click", bonk);
mole2.addEventListener("click", bonk);
mole3.addEventListener("click", bonk);
mole4.addEventListener("click", bonk);
