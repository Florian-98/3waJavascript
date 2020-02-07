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
  const initiativeJoueur = lancelesDes(nombreDeDesInitiative, nombreDeFacesInitiative)
  const initiativeDragon = lancelesDes(nombreDeDesInitiative, nombreDeFacesInitiative)

  return {initiativeJoueur, initiativeDragon}
}


//On détermine le nombre de points de dommage causés par l'attaquant à son adversaire

const nombreDeFacesAttaque = 6;
const nombreDeDesAttaque = 3;
const attaqueDragon = lancelesDes(nombreDeDesAttaque, nombreDeFacesAttaque)
const attaqueJoueur = lancelesDes(nombreDeDesAttaque, nombreDeFacesAttaque)



function play() {
  let initiativeDepart =  initiative();
  if (initiativeDepart.initiativeDragon > initiativeDepart.initiativeJoueur) {
  //Dragon commence
    chevalier.pointDevie = (chevalier.pointDevie - attaqueDragon)
    console.log("le dragon vous à attaqué. Il vous reste " + chevalier.pointDevie)


  }  else {
  //joueur commence
    dragon.pointDevie = (dragon.pointDevie - attaqueJoueur)
    console.log("vous avez attaqué le dragon. Il reste au dragon " + dragon.pointDevie)
  }

}

while (chevalier.pointDevie > 0 && dragon.pointDevie > 0) {
  play();
}

if {
  
}




////ROUNDS//////
///fin de partie///




///fin de partie///






/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/
