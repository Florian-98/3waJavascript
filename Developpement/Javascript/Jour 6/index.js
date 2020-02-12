"use strict"
//Receuillir les valeurs des inputs//

let form = document.querySelector('form');
let name = document.getElementById("name");
let firstName = document.getElementById("fisrtName");
let age = document.getElementById("age");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  console.log(name + firstName + age);
});





/* let object = {
  fruit: orange,
  legume: haricot,
  fruitEtLegume : function() {
    return this.fruit + this.legume;
  }
}
console.log(object.fruitEtLegume);

*/
