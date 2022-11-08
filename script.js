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
function displaydate(){
  const d = new Date();
  var month = "";
  switch (new Date().getMonth()) {
    case 0:
      month = "Jan";
      break;
    case 1:
      month = "Feb";
      break;
    case 2:
      month = "Mar";
      break;
    case 3:
      month = "Apr";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "Aug";
      break;
    case 8:
      month = "Sep";
      break;
    case 9:
      month = "Oct";
      break;
    case 10:
      month = "Nov";
      break;
    case 11:
      month = "Dec";
      break;
  }
  
  document.getElementById("date").innerHTML = month + " " + d.getDate() + " " + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes() + ":" +d.getSeconds();
}
setInterval(displaydate, 1000);