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
let caption = document.querySelector('figcaption');
let initialicon = play_stop.querySelector('i');


/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/
//cacher la barre de navigation
function toogleToolBar() {

    toolBar.classList.toggle('none');

}



function addLegendOnImages () {

};

let slide = [
  {
    src: "images/1.jpg",
    legend: "Grafiti street"
  },
  {
    src: "images/2.jpg",
    legend: "Highway on a bridge"
  },
  {
    src: "images/3.jpg",
    legend: "Colorfull building"
  },
  {
    src: "images/4.jpg",
    legend: "Luminous view"
  },
  {
    src: "images/5.jpg",
    legend: "City that never sleeps"
  },
  {
    src: "images/6.jpg",
    legend: "Eiffel tower"
  },
];





let numero = 0;
let ul = document.getElementById('puces');
let lis = ul.querySelectorAll('li');

function colleLaCouleurAuxPuces(img, numero = 0) {

  let ul = document.getElementById('puces');

  let lis = ul.querySelectorAll('li');

  lis.forEach(function(li) {
    let attribute = li.firstChild.getAttribute('data-slide');
    li.firstChild.classList.remove('js-dots-color');
    if (attribute == numero) {
      li.firstChild.classList.add('js-dots-color');
      console.log(lis);
    }
  });
}

function clickOnDotShowCorrespondingImage() {

  lis.forEach(function(li) {
    let attribute = li.firstChild.getAttribute('data-slide');
    li.addEventListener('click', function() {
      random(attribute);
    });
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
    colleLaCouleurAuxPuces(img, numero);
    img.src = slide[numero].src;
    caption.innerText = slide[numero].legend;
    caption.classList.add('animation');
    img.classList.add('animation')
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

function random(index) {
  if (!index) {
      index = generateRandomNumber();
  }

  const img = document.getElementById("slide");
  img.src = slide[index].src;
  caption.innerText = slide[index].legend;
  colleLaCouleurAuxPuces(img, index);

};

aleatoire.addEventListener('click', function() {
  random();
});

//defilement automatique

play_stop.addEventListener('click', play);




function play() {
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
};

/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/
document.addEventListener('DOMContentLoaded', function() {
  showHideToolbar.addEventListener('click', function() {
    toogleToolBar();})
    colleLaCouleurAuxPuces();
    clickOnDotShowCorrespondingImage();
});

// attribution des touches du clavier
document.addEventListener('keydown', function(event) {

  if (event.code == 'F2') {
    toogleToolBar();
  }

  if(event.code == 'ArrowLeft') {
    ChangeSlide(-1);
  }

  if(event.code == 'ArrowRight') {
    ChangeSlide(1);
  }

  if (event.code == 'Control') {
    play();
  }

  if (event.code == 'Enter') {
    random();

  }

});
