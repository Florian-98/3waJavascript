/*const tva = 20;
let montantht = window.prompt ("Entrez ici votre montant HT , sachant qu'en France, le taux de TVA est à 20 %");
montantht= parseFloat(montantht);
let result = montantht * tva;
result = Math.round(result /20)*1.2;
Math.trunc(result);

document.write("Montant HT = " + montantht + ("€") + ("<br/>") + ("Taux de TVA = 20% ") + ("<br/>") + ("Resultat après application de la TVA = ") + result + ("€"));
*/
/*let array = ["Mike", 10 ,"laurent"]
document.write(array[0])
document.write("<br/>")
document.write(array.length)
document.write("<br/>")
array =  [[0,1,2],["test","palmier"]]*/
let array = new Array();
array[0] = "lundi";
array[1] = "mardi";
array[2] = "mercredi";
array[3] = "jeudi";
array[4] = "vendredi";
array[5] = "samedi";
array[6] = "dimanche";

document.write("la longueur du tableau = " + array.length + "<br/>")
console.table(array);
