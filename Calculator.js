let eins = document.getElementById("eins");
let zwei = document.getElementById("zwei");
let drei = document.getElementById("drei");
let vier = document.getElementById("vier");
let fuenf = document.getElementById("fuenf");
let sieben = document.getElementById("sieben");
let neun = document.getElementById("neun");
let multizwei = document.getElementById("multizwei");
let multivier = document.getElementById("multivier");
let points = 0;
let anzahl = 0;

let ergebnis = 18;


let clickeins = function(e) {

points = points + 1;
anzahl = anzahl + 1;

  if(points == ergebnis) {
  document.getElementById("welldone").classList.remove("hidden");
  } else if (anzahl == 5) {
      document.getElementById("multizwei").classList.remove("hiddenmultizwei");
    }

counter.innerHTML = points;
zaehler.innerHTML = anzahl;
}

let clickzwei = function(e) {

points = points + 2;
anzahl = anzahl + 1;

  if(points == ergebnis) {
  document.getElementById("welldone").classList.remove("hidden");
  } else if (anzahl == 5) {
      document.getElementById("multizwei").classList.remove("hiddenmultizwei");
    }

counter.innerHTML = points;
zaehler.innerHTML = anzahl;
}

let clickneun = function(e) {

points = points + 9;
anzahl = anzahl + 1;

  if(points == ergebnis) {
  document.getElementById("welldone").classList.remove("hidden");
  } else if (anzahl == 5) {
      document.getElementById("multizwei").classList.remove("hiddenmultizwei");
    }

counter.innerHTML = points;
zaehler.innerHTML = anzahl;
}

let clicksieben = function(e) {

points = points + 7;
anzahl = anzahl + 1;

  if(points == ergebnis) {
  document.getElementById("welldone").classList.remove("hidden");
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
  // neues level starten
  ergebnis = 16;
  points = 0;
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
  // neues level starten
  ergebnis = 16;
  points = 0;
} else if (anzahl == 5) {
    document.getElementById("multizwei").classList.remove("hiddenmultizwei");
  }

counter.innerHTML = points;
zaehler.innerHTML = anzahl;
}



eins.addEventListener("click", clickeins);
zwei.addEventListener("click", clickzwei);
neun.addEventListener("click", clickneun);
sieben.addEventListener("click", clicksieben);
multizwei.addEventListener("click", clickmultizwei);
multivier.addEventListener("click", clickmultivier);
