//declare the btn elements
let homeScoreBtnOne = document.getElementById('home-score-btn-1')
let guestScoreBtnOne = document.getElementById('guest-score-btn-1')
let homeScoreBtnTwo = document.getElementById('home-score-btn-2')
let guestScoreBtnTwo = document.getElementById('guest-score-btn-2')
let homeScoreBtnThree = document.getElementById('home-score-btn-3')
let guestScoreBtnThree = document.getElementById('guest-score-btn-3')
let resetButton = document.getElementById('btn-reset');
//declare the score elements
let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
//set score 
homeScore = 0;
guestScore =0;



//onclick btn functins
function hadd1(){
    //function
    homeScore += 1;
    //set elements to function 
    homeScoreEl.textContent = homeScore;
}
function hadd2(){
     homeScore += 2;
     homeScoreEl.textContent = homeScore;
}

function hadd3(){
    homeScore += 3;
    homeScoreEl.textContent = homeScore; 
}

function gadd1(){
    guestScore += 1;
    guestScoreEl.textContent = guestScore;
}
function gadd2(){
     guestScore += 2;
    guestScoreEl.textContent = guestScore;
}

function gadd3(){
    guestScore += 3;
    guestScoreEl.textContent = guestScore;
}

function resetScore(){
    homeScore =0;
    homeScoreEl.textContent = homeScore;
    guestScore=0;
    guestScoreEl.textContent = guestScore;
}