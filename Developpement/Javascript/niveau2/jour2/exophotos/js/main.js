

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/
let li = document.querySelectorAll('li');
let p = document.getElementById('total');
let em = p.firstElementChild;


/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/
let selection = 0;

li.forEach(function(li) {

  this.addEventListener('click', gereLeClique);

});

function gereLeClique() {
  if (this.classList.contains('selected')) {
    this.classList.remove('selected');

    return em.innerText = afficheLeNombreDelementsQuiOntLaClasseSelected();

  }

  this.classList.add('selected');

  em.innerText = afficheLeNombreDelementsQuiOntLaClasseSelected();
}

function afficheLeNombreDelementsQuiOntLaClasseSelected() {

  return document.querySelectorAll('.selected').length;

}



/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/
