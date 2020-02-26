'use strict';   // Mode strict du JavaScript
/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/
let showHideToolbar = document.getElementById('toolbar-toggle');
let toolBar = document.getElementById('toolbar');
let precedent = document.getElementById('precedent');
let suivant = document.getElementById('suivant');
let aleatoire = document.getElementById('slider-random');
let play_stop = document.getElementById('slider-toggle');

let initialicon = play_stop.querySelector('i');


/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/
//cacher la barre de navigation
function toogleToolBar() {

  showHideToolbar.addEventListener('click', function() {
    toolBar.classList.toggle('none');
  });
}

//Fonction boutons de la nav
//previous et next
let slide = new Array("images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpg", "images/6.jpg");
let numero = 0;

function colleLaCouleurAuxPuces(img, numero = 0) {

  let ul = img.nextElementSibling;

  let lis = ul.querySelectorAll('li');

  lis.forEach(function(li) {
    let attribute = li.firstChild.getAttribute('data-slide');
    li.firstChild.classList.remove('js-dots-color');
    if (attribute == numero) {
      li.firstChild.classList.add('js-dots-color');
    }
  });
}

function ChangeSlide(sens) {

    numero = numero + sens;
    if (numero < 0) {
      numero = slide.length - 1;
    }

    if (numero > slide.length - 1) {
      numero = 0;
    }

    let img = document.getElementById("slide");
    colleLaCouleurAuxPuces(img)
    img.src = slide[numero];
};

suivant.addEventListener('click', function(){
  ChangeSlide(1);

});

precedent.addEventListener('click', function(){
  ChangeSlide(-1);

});

//Aleatoire
function generateRandomNumber() {
  return Math.floor(Math.random() * slide.length);
}

function random() {

  let numero = generateRandomNumber();

  const img = document.getElementById("slide");
  img.src = slide[numero];
  colleLaCouleurAuxPuces(img, numero);

};

aleatoire.addEventListener('click', function() {
  random();
});

//defilement automatique

play_stop.addEventListener('click', function() {

  initialicon.classList.toggle('fa-play');
  initialicon.classList.toggle('fa-pause');

  let interval = setInterval(function() {

    if (initialicon.classList.contains('fa-pause')) {
      return ChangeSlide(1);
    }
    // counter++;
    // console.log(counter);
    // if (counter === 6) {
    //
    clearInterval(interval);
    // }

  },2000);
});




/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/
document.addEventListener('DOMContentLoaded', function() {
    toogleToolBar();
});
