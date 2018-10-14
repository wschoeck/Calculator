let eins = document.getElementById("eins");
let zwei = document.getElementById("zwei");
let drei = document.getElementById("drei");
let vier = document.getElementById("vier");
let fuenf = document.getElementById("fuenf");
let neun = document.getElementById("neun");
let multizwei = document.getElementById("multizwei");
let multivier = document.getElementById("multivier");
let points = 0;

let ergebnis = 18;

let clickeins = function(e) {

points = points + 1;

  if(points == ergebnis) {
  document.getElementById("welldone").classList.remove("hidden");
  }

counter.innerHTML = points;
}

let clickzwei = function(e) {

points = points + 2;

  if(points == ergebnis) {
  document.getElementById("welldone").classList.remove("hidden");
  }

counter.innerHTML = points;
}

let clickneun = function(e) {

points = points + 9;

  if(points == ergebnis) {
  document.getElementById("welldone").classList.remove("hidden");
  }

counter.innerHTML = points;
}

let clickmultizwei = function(e) {

points = points * 2;

  if(points == ergebnis) {
  document.getElementById("welldone").classList.remove("hidden");
  // neues level starten
  ergebnis = 16;
  points = 0;
  }

counter.innerHTML = points;
}

let clickmultivier = function(e) {

  points = points * 4;

  if(points == ergebnis) {
  document.getElementById("welldone").classList.remove("hidden");
  // neues level starten
  ergebnis = 16;
  points = 0;
  }

counter.innerHTML = points;
}


eins.addEventListener("click", clickeins);
zwei.addEventListener("click", clickzwei);
neun.addEventListener("click", clickneun);
multizwei.addEventListener("click", clickmultizwei);
multivier.addEventListener("click", clickmultivier);
