let eins = document.getElementById("eins");
let zwei = document.getElementById("zwei");
let drei = document.getElementById("drei");
let vier = document.getElementById("vier");
let fuenf = document.getElementById("fuenf");
let sieben = document.getElementById("sieben");
let neun = document.getElementById("neun");
let multizwei = document.getElementById("multizwei");
let multivier = document.getElementById("multivier");
let minusacht = document.getElementById("minusacht");
let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let debug = document.getElementById("debug");
let again = document.getElementById("again");
let points = 0;
let anzahl = 0;

let ergebnis = 18;
let operation = 1;

let possibleResults = [
  17, // stefans wunsch zahl
  13, // alex wunsch zahl
  15,
  27,
  29,
  32,
]

let clickonceagain = function(value) {
document.getElementById("again").classList.remove("hiddenagain");
document.getElementById("welldone").classList.add("hidden");
console.log("Hallo");
}

let setResult = function(value) {
  document.getElementById("result-container").innerHTML = value;
}

let resetGame = function(value) {
  ergebnis = possibleResults[Math.round(Math.random() * (possibleResults.length - 1))];
  points = 0;
  setResult(ergebnis);
}



let clickeins = function(event) {
  points = points + (1 * operation);
  anzahl = anzahl + 1;

  if (points == ergebnis) {
    document.getElementById("welldone").classList.remove("hidden");

    resetGame();

  } else if (anzahl == 5) {
    document.getElementById("multizwei").classList.remove("hiddenmultizwei");
  }

  counter.innerHTML = points;
  zaehler.innerHTML = anzahl;
}

let clickzwei = function(e) {

points = points + (2 * operation);
anzahl = anzahl + 1;

  if(points == ergebnis) {
  document.getElementById("welldone").classList.remove("hidden");


  resetGame();

  } else if (anzahl == 5) {
      document.getElementById("multizwei").classList.remove("hiddenmultizwei");
    }

counter.innerHTML = points;
zaehler.innerHTML = anzahl;
}

let clickneun = function(e) {

points = points + (9 * operation);
anzahl = anzahl + 1;

  if(points == ergebnis) {
    document.getElementById("welldone").classList.remove("hidden");
    resetGame();
  } else if (anzahl == 5) {
    document.getElementById("multizwei").classList.remove("hiddenmultizwei");
  }

  counter.innerHTML = points;
  zaehler.innerHTML = anzahl;
}

let clicksieben = function(e) {
  points = points + (7 * operation);
  anzahl = anzahl + 1;

  if(points == ergebnis) {
    document.getElementById("welldone").classList.remove("hidden");
    resetGame();
  } else if (anzahl == 5) {
    document.getElementById("multizwei").classList.remove("hiddenmultizwei");
  }

  counter.innerHTML = points;
  zaehler.innerHTML = anzahl;
}

let clickmultizwei = function(e) {

points = points * 2;
anzahl = anzahl + 1;

  if(points == ergebnis) {
    document.getElementById("welldone").classList.remove("hidden");
    resetGame();
  } else if (anzahl == 5) {
    document.getElementById("multizwei").classList.remove("hiddenmultizwei");
  }

counter.innerHTML = points;
zaehler.innerHTML = anzahl;
}

let clickmultivier = function(e) {

  points = points * 4;
  anzahl = anzahl + 1;

  if(points == ergebnis) {
    document.getElementById("welldone").classList.remove("hidden");
    resetGame();
  } else if (anzahl == 5) {
    document.getElementById("multizwei").classList.remove("hiddenmultizwei");
  }

  counter.innerHTML = points;
  zaehler.innerHTML = anzahl;
}

let clickPlus = function(e) {
  operation = 1;
  document.getElementById("circle").classList.remove("hiddencircle");
  document.getElementById("circleminus").classList.add("hiddencircleminus");
  /* debug.innerHTML = operation; */

}


let clickMinus = function(e) {
  operation = -1;
  document.getElementById("circleminus").classList.remove("hiddencircleminus");
  document.getElementById("circle").classList.add("hiddencircle");
  /* debug.innerHTML = operation; */
}

let clickminusacht = function(e) {
  points = points - 8;
  anzahl = anzahl + 1;

  counter.innerHTML = points;
  zaehler.innerHTML = anzahl;
}

plus.addEventListener("click", clickPlus);
minus.addEventListener("click", clickMinus);


eins.addEventListener("click", clickeins);
zwei.addEventListener("click", clickzwei);
neun.addEventListener("click", clickneun);
sieben.addEventListener("click", clicksieben);
multizwei.addEventListener("click", clickmultizwei);
multivier.addEventListener("click", clickmultivier);
minusacht.addEventListener("click", clickminusacht);
again.addEventListener("click", clickonceagain);


let overlay = document.getElementById("overlay");

document.getElementById("toggle").addEventListener("click", function() {
  overlay.classList.add("show");

});



overlay.addEventListener("click", overlay);
