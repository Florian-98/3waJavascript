"use strict"
//Receuillir les valeurs des inputs//

let form = document.querySelector('form');
let name = document.getElementById("name");
let firstName = document.getElementById("fisrtName");
let age = document.getElementById("age");


form.addEventListener("submit", function(event) {
  event.preventDefault();

  const p = document.createElement('p');

  p.innerText = name.value;

  const z = document.createElement('p');

  z.innerText = age.value;




  form.appendChild(p);
  form.appendChild(z);

});

//lien//

let lien = document.querySelector('a');
lien.addEventListener("click", function(event) {

  event.preventDefault();
});







//objet//

let voiture = {
  pneu : "michelin",
  moteur: "v12",
  getCarEngine: function () {
    this.fabricant = 'fiat';
    this.modele = 'panda';
    this.annee = 2006;
    return {
      fabricant: this.fabricant,
      model: this.modele,
      annee: this.annee
    };

    console.log(this);
  },
  getOriginalCar: function() {
    return {
      pneu: this.pneu,
      moteur: this.moteur
    }
  }
}


//voiture = voiture.getOriginalCar();
console.table(voiture);
