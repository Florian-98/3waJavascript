'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* **************************************** DONNEES JEU **************************************** */
/*************************************************************************************************/
const chevalier = {
  pointDevie: 100

};

const dragon = {
  pointDevie: 100

};

let niveau = '';

do {
  niveau = window.prompt("Quel niveau choisissez vous?").toLowerCase();
} while (niveau != 'facile' && niveau != 'normal' && niveau != 'difficile');

console.log("Vous avez choisi le niveau " + niveau);



/*************************************************************************************************/
/* *************************************** FONCTIONS JEU *************************************** */
/*************************************************************************************************/

function lancelesDes(nonmbreDeDes, nombreDeFaces) {
  let sum = 0;

  for (let i = 0; i < nonmbreDeDes; i++) {
    sum = sum + Math.floor(Math.random() *  nombreDeFaces) + 1;
  }

  return sum;
}
const nombreDeDesJoueur = 10;
const nombreDeDesDragon = 5;
const nombreDeFaces = 10;

const pointDeVieDuJoueur = lancelesDes(nombreDeDesJoueur, nombreDeFaces);
chevalier.pointDevie =  chevalier.pointDevie + pointDeVieDuJoueur;
const pointDeVieDuDragon = lancelesDes(nombreDeDesDragon, nombreDeFaces);
dragon.pointDevie =  dragon.pointDevie + pointDeVieDuDragon;
console.table(dragon);
console.table(chevalier);

// 2) On détermine qui est le plus rapide et attaque l'autre : c'est l'initiative
// 	Calcul de l'initiative : chaque personnage lance 10D6. Celui qui a le plus grand score attaque l'autre.

const nombreDeFacesInitiative = 6;
const nombreDeDesInitiative = 10;

function initiative(){
  const initiativeJoueur = lancelesDes(nombreDeDesInitiative, nombreDeFacesInitiative);
  const initiativeDragon = lancelesDes(nombreDeDesInitiative, nombreDeFacesInitiative);

  return {initiativeJoueur, initiativeDragon}
}

let nombreDeFacesAttaque = 6;
let nombreDeDesAttaqueDragon = 0;
let nombreDeDesAttaqueJoueur = 0;
//On détermine le nombre de points de dommage causés par l'attaquant à son adversaire
if (niveau == "facile") {
  nombreDeDesAttaqueDragon = 1;
  nombreDeDesAttaqueJoueur = 5;
} else if (niveau == "difficile") {
  nombreDeDesAttaqueDragon = 4;
  nombreDeDesAttaqueJoueur = 2;
} else {
  nombreDeDesAttaqueDragon = 3;
  nombreDeDesAttaqueJoueur = 3;
}



const attaqueDragon = lancelesDes(nombreDeDesAttaqueDragon, nombreDeFacesAttaque);
const attaqueJoueur = lancelesDes(nombreDeDesAttaqueJoueur, nombreDeFacesAttaque);


let round = 1;



function play() {
  let initiativeDepart =  initiative();
  console.log("tour" + round)
  if (initiativeDepart.initiativeDragon > initiativeDepart.initiativeJoueur) {
  //Dragon commence
    chevalier.pointDevie = (chevalier.pointDevie - attaqueDragon)
    console.log("le dragon vous à attaqué. Il vous reste " + chevalier.pointDevie)


  }  else {
  //joueur commence
      dragon.pointDevie = (dragon.pointDevie - attaqueJoueur)
      console.log("vous avez attaqué le dragon. Il reste au dragon " + dragon.pointDevie)
  }
 round++

}

while (chevalier.pointDevie > 0 && dragon.pointDevie > 0) {
  play();

  if (chevalier.pointDevie > 0 && dragon.pointDevie <= 0) {
    console.log("Vous remportez la partie")

} else if (chevalier.pointDevie <= 0 && dragon.pointDevie > 0) {
    console.log("le Dragon remporte la partie")
  } else {
      console.log("egalité")

  }
}








////ROUNDS//////
///fin de partie///




///fin de partie///






/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/
