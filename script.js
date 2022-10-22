let homeScore = 0;
let guestScore = 0;
document.getElementById("home-score").innerHTML = homeScore;
document.getElementById("guest-score").innerHTML = guestScore;
document.getElementById("leading").innerHTML = "Leading: NONE"

function add1home(){
  homeScore += 1;
  document.getElementById("home-score").innerHTML = homeScore;
  if (homeScore > guestScore){
    document.getElementById("leading").innerHTML = "Leading: HOME"
  }
  else if(homeScore < guestScore){
    document.getElementById("leading").innerHTML = "Leading: GUEST"
  }
}
function add2home(){
  homeScore += 2;
  document.getElementById("home-score").innerHTML = homeScore;
  if (homeScore > guestScore){
    document.getElementById("leading").innerHTML = "Leading: HOME"
  }
  else if(homeScore < guestScore){
    document.getElementById("leading").innerHTML = "Leading: GUEST"
  }
}
function add3home(){
  homeScore += 3;
  document.getElementById("home-score").innerHTML = homeScore;
  if (homeScore > guestScore){
    document.getElementById("leading").innerHTML = "Leading: HOME"
  }
  else if(homeScore < guestScore){
    document.getElementById("leading").innerHTML = "Leading: GUEST"
  }
}
function add1guest(){
  guestScore += 1;
  document.getElementById("guest-score").innerHTML = guestScore;
  if (homeScore > guestScore){
    document.getElementById("leading").innerHTML = "Leading: HOME"
  }
  else if(homeScore < guestScore){
    document.getElementById("leading").innerHTML = "Leading: GUEST"
  }
}
function add2guest(){
  guestScore += 2;
  document.getElementById("guest-score").innerHTML = guestScore;
  if (homeScore > guestScore){
    document.getElementById("leading").innerHTML = "Leading: HOME"
  }
  else if(homeScore < guestScore){
    document.getElementById("leading").innerHTML = "Leading: GUEST"
  }
}
function add3guest(){
  guestScore += 3;
  document.getElementById("guest-score").innerHTML = guestScore;
  if (homeScore > guestScore){
    document.getElementById("leading").innerHTML = "Leading: HOME"
  }
  else if(homeScore < guestScore){
    document.getElementById("leading").innerHTML = "Leading: GUEST"
  }
}

function reset(){
  homeScore = 0;
  guestScore = 0;
  document.getElementById("home-score").innerHTML = homeScore;
  document.getElementById("guest-score").innerHTML = guestScore;
  document.getElementById("leading").innerHTML = "Leading: NONE"
}
