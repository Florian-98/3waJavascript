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
const resetBoutton = document.getElementById('boutonReset');

document.addEventListener("DOMContentLoaded", (event) => {

  souris.mouvementSouris(rect);

  ligne.epaisseurDeLigne();
  ligne.couleurDeLigne();
  effacer.Gomme();
  effacer.toutEffacer();

});



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
