window.addEventListener("DOMContentLoaded", (event) => {

  epaisseurDeLigne();
  mouvementSouris();
  couleurDeLigne();
  Gomme();
  toutEffacer();

});

let dessin = false;
let x = 0;
let y = 0;


let lineWidth = 1;
let strokeStyle = 'black';
const ardoise = document.getElementById('ardoise');
const context = ardoise.getContext('2d');

const rect = ardoise.getBoundingClientRect();

const btnsForLine = Array.from(document.querySelectorAll('.js-trait'));



const btnsWithColors = Array.from(document.querySelectorAll('.rond'));
const btnsGomme = Array.from(document.querySelectorAll('.js-gomme'));
const pipette = document.getElementById('colorpicker');


const resetBoutton = document.getElementById('boutonReset')

let mousePosX = '';
let mousePosY = '';


function epaisseurDeLigne() {

  btnsForLine.forEach(function(btn) {
    btn.addEventListener('click', function() {
      lineWidth = parseInt(this.getAttribute('data-width'));
    });
  });
}

function couleurDeLigne() {
  btnsWithColors.forEach(function(btn) {
    btn.addEventListener('click', function() {
      strokeStyle = this.getAttribute('data-color');
    });
  });

  pipette.addEventListener('change', function() {
    strokeStyle = pipette.value ;

  });
}

function Gomme() {

  btnsGomme.forEach(function(btn) {
    btn.addEventListener('click', function() {
      lineWidth = parseInt(this.getAttribute('data-size'));
      strokeStyle = 'white';
    });
  });
}

function toutEffacer() {

  resetBoutton.addEventListener('click', function() {
      context.clearRect(0, 0, ardoise.width, ardoise.height);
  });

};


function mouvementSouris() {
ardoise.addEventListener('mousedown', e => {
  mousePosX = e.clientX - rect.left;
  mousePosY = e.clientY - rect.top;
  dessin = true;
});

ardoise.addEventListener('mousemove', e => {
    if (dessin) {
      newMousePosX = e.clientX - rect.left;
      newMousePosY = e.clientY - rect.top;
      ligneDessin(context, mousePosX, mousePosY,  newMousePosX, newMousePosY, lineWidth);
      mousePosX = newMousePosX;
      mousePosY = newMousePosY;
    }
  });

  window.addEventListener('mouseup', e => {
    dessin = false;
  });
}

function ligneDessin(context, x1, y1, x2, y2, lineWidth) {
  context.beginPath();
  context.strokeStyle = strokeStyle;
  context.lineWidth = lineWidth;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();

};

 document.getElementById('nav1');
 document.getElementById('cacher1');


cacher1.addEventListener('click', e => {
  e.preventDefault();
  $(nav1).toggle('500');
});

document.getElementById('nav2');
document.getElementById('cacher2');


cacher2.addEventListener('click', e => {
 e.preventDefault();
 $(nav2).toggle('500');
});

document.getElementById('nav3');
document.getElementById('cacher3');

cacher3.addEventListener('click', e => {
 e.preventDefault();
 $(nav3).toggle('500');
});

document.getElementById('nav4');
document.getElementById('cacher4');

cacher4.addEventListener('click', e => {
 e.preventDefault();
 $(nav4).toggle('500');
});

document.getElementById('nav5');
document.getElementById('cacher5');

cacher5.addEventListener('click', e => {
 e.preventDefault();
 $(nav5).toggle('500');
});
