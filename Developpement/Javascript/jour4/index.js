'use strict';



let listeDeCourse = new Array();
listeDeCourse = ['nutella', 'pates', 'sopalin', 'tournevis', 'nitrate de potassium'];
for (let i = 0; i < listeDeCourse.length; i++) {

}


function ajoutProduit() {
  let produit = window.prompt("Entrez un produit ici").toLowerCase();
  listeDeCourse.push(produit);
}

function supprimerProduit(liste) {
  let produit = window.prompt("Entrez le nom du produit que vous voulez suppprimer").toLowerCase();      
  for (let i = 0; i < liste.length; i++) {
    if(listeDeCourse[i] === produit) {
      return liste.splice(i, 1);
    }

  }

}

function supprimerListe(liste) {
 let produit = window.prompt("voulez vous supprimer toute la liste?").toLowerCase();
 if (produit === "oui"){
   liste.splice(0);
   document.write("Votre liste à été vidée")
 } else {

    document.write("Votre liste est sauvegardée")
 }


};

ajoutProduit();

document.write("<br>")
supprimerProduit(listeDeCourse);

document.write("<br>")
supprimerListe(listeDeCourse);






let ul = document.querySelector("ul")
let li = document.querySelectorAll("li")
function afficherListe(liste){
  document.write(ul);

  for(let i = 0; i < liste.length; i++) {

  	document.write(`<li>${liste[i]}</li>`);

  }

  document.write(fermeUl);

}

afficherListe(listeDeCourse);
