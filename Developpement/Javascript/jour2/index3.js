//objets//


/*let voiture = {
  marque: "wolksvagen",
  année: new Date('2014-02-11'),
  achat: new Date('2015-05-04'),
  passagers: ["Vincent", "Nils", "Justine"],
}

//concaténation//

document.write('<ul>')
document.write(`<li>${voiture.marque}</li>`)
document.write('<li>' + voiture.marque + '</li>')
document.write(`<li>${voiture.année}</li>`)
document.write(`<li>${voiture.achat}</li>`)
document.write(`<li>${voiture.passagers}</li>`)
document.write('</ul>')*/

 //opérateurs de comparaison//

/*let a = 30
document.write("30" >= a)

document.write("<br>")

let b = 57
document.write("45" === b)

document.write("<br>")

let c = 100
document.write("100" <= c)*/

//conditon if et else//

/*const ageMini = 21;
const ageClient = window.prompt ("quel age avez vous?");

if (ageMini <= ageClient){
  alert("vous pouvez entrer")
}
else {
  alert("vous n'entrez pas")
}

// || = "ou" boolean//
if (ageClient > ageMini || ageClient == ageMini) {
  alert("vous pouvez entrer")
}

// != signifie "different"//

if(ageMini != ageClient ) {
  alert("vous n'entrez pas")
}

// && signifie "et" boolean //
if(ageMini != ageClient && ageClient >= ageMini) {
	alert("vous pouvez entrer")
}
else {
  alert("vous n'entrez pas")
} */

/*const TVA = 20;
const reduction = 10;
let montantHT = window.prompt("Veuillez préciser le montant Hors Taxe");
montantHT = parseFloat(montantHT);
let remise = window.prompt("Désirez vous une remise?")*/

/*
if ( remise ==="yes" || remise === "oui") {
    montantTTC = montantHT * (1 - reduction / 100) * (1 + TVA / 100)
    montantTTC = montantTTC.toFixed(2)
    alert("la remise à été appliquée")
  }
  else {
    montantTTC = montantHT * (1 + TVA / 100)
    montantTTC = montantTTC.toFixed(2)
    alert("la remise n'à pas été appliquée")
  }
alert(montantTTC)

document.write("Votre montantHT = " + montantHT)
document.write("<br>")
document.write("Taux de TVA appliquable en France = 20 %")
document.write("<br>")
document.write("Désirez vous une remise? votre réponse =" + remise)
document.write("<br>")
document.write("Valeur de la remise = 10%")
document.write("<br>")
document.write("montantTTC = " + montantTTC + "euros")
*/

let nombre1 = parseFloat(window.prompt("Entrez un nombre:"));
let nombre2 = parseFloat(window.prompt("Entrez un second nombre:"));
let action = (window.prompt("Entrez le type d'opération mathématique souhaité."));
let resultat;

if (isNaN(nombre1) || isNaN(nombre2)) {
  alert("Merci de bien vouloir saisir des nombres.")
}

else {
  if (action === "+") {
    resultat = nombre1 + nombre2,
    alert(resultat)
  }
  else if (action === "-") {
    resultat = nombre1 - nombre2,
    alert(resultat)
  }
  else if (action === "*") {
    resultat = nombre1 * nombre2,
    alert(resultat)
  }
  else if (action === "/") {
    resultat = nombre1 / nombre2,
    alert(resultat)
  }
  else {
    (action === "^"),
    resultat = nombre1 ** nombre2,
    alert(resultat)
  }
}
document.write(nombre1 + action + nombre2 + "=" + resultat)
