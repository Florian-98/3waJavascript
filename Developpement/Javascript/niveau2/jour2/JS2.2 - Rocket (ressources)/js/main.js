'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/
let annulation = document.getElementById('cancel-button');
let chrono = document.getElementById('billboard');
let depart = document.getElementById('firing-button');
let fusee = document.getElementById('rocket');
let rampe = document.getElementById('lauching-ramp')
let interval = '';
let counter = 10;
const nbrEtoileAcreer = 500;
let main = document.querySelector('main');
/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/

annulation.classList.add('disabled');

depart.addEventListener('click', function() {

  annulation.classList.remove('disabled');
  depart.classList.add('disabled');
  fusee.src='images/rocket2.gif';
  interval = setInterval(function() {
    counter--;
    chrono.firstElementChild.innerText = counter;
    console.log(counter);
    if (counter === 0) {
      fusee.src='images/rocket3.gif';
      fusee.classList.add('tookOff');
      annulation.classList.add('disabled')
      return clearInterval(interval);
    }

  },1000);
});


annulation.addEventListener('click', function() {
  annulation.classList.add('disabled');
  depart.classList.remove('disabled');
  clearInterval(interval);
  fusee.src='images/rocket1.png';
  fusee.classList.remove('tookOff');
  counter = 10;
  chrono.firstElementChild.innerText = counter;
});

// fair creer fonction pour creer des etoiles
function creerEtoile() {
  let div = document.createElement('div');
  div.classList.add('star');
  taille(div);
  positionAleatoire(div);
  main.appendChild(div);
}


function taille(div) {
  const random = Math.random();
  let starClass
  if(random < 1 / 3) {          // Entre 0.00 et ~0.33 : l'ordinateur sélectionne la pierre
      starClass = 'tiny';
  }
  else if(random < 2 / 3) {    // Entre ~0.33 et ~0.66 : l'ordinateur sélectionne la feuille
      starClass = 'normal';
  }
  else {                       // Au-delà de ~0.66 : l'ordinateur sélectionne le ciseau
      starClass = 'big';
  }
  div.classList.add(starClass);
}


// creer 150 etoiles
for (let i = 0; i < nbrEtoileAcreer; i++) {
  creerEtoile();
}

function nbrRandom(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}

function positionAleatoire(item) {
  item.style.left = nbrRandom(window.innerWidth, 0) + 'px';
  item.style.top = nbrRandom(window.innerHeight, 0)+ 'px';
}

/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/
