document.addEventListener('DOMContentLoaded', function() {

  $form = $('#form');
  // $form.hide();

  afficheTousLesContacts();
  submitForm();
  showForm($('#showForm'));
  effaceOneContact();
  $('.js-edit').click(function() {
    modfifierLaListeConcernantLeContactEnCliquantSurLeBouttonModifier($(this));
    let contacts = getLocalstorage();
    contact = contacts[$(this).attr('data-contact')];
      // #2  tous les contacts
      // array.splice(data-contact, 1);

    contacts.splice($(this).attr('data-contact'), 1);
    console.log(contact);

    // $(this).parent().parent().hide();
    localStorage.setItem('Contacts', JSON.stringify(contacts));
    contacts = getLocalstorage();
    $('.list-group').remove();
    afficheTousLesContacts(contacts);
    effaceOneContact();


  });
});



function showForm(obj) {
  obj.on('click', function(e) {
    e.preventDefault();
    $form.fadeToggle('500');
  })
}

function submitForm() {
  // if(!editState) {

    $form.on('submit', function(e) {
      e.preventDefault();

      putToLocalStorage();


    console.log('je vais editer');
  })
}


function getLocalstorage() {
  let array = [];

  if(localStorage.getItem('Contacts') && JSON.parse(localStorage.getItem('Contacts')).length) {
      array = JSON.parse(localStorage.getItem('Contacts'));
  }

  return array;
}


let html = '';

function generateHtml(contact, index) {
  let ul = document.createElement('ul');

  ul.classList.add('list-group', 'shadow', 'p-3', 'mb-5', 'bg-white', 'rounded', 'ml-2', 'mr-2');

  ul.innerHTML += `
      <li class="list-group-item">${contact.email}</li>
      <li class="list-group-item">${contact.address}</li>
      <li class="list-group-item">${contact.zipcode}</li>
      <li class="list-group-item">${contact.city}</li>
      <li class="list-group-item"><button class="btn btn-xs btn-outline-danger js-delete" data-contact=${index}>Supprimer</button></li>
      <li class="list-group-item"><button class="btn btn-xs btn-outline-warning js-edit" data-contact=${index}>Modifier</button></li>
    </ul>
  `;

  $affiche.append(ul);
}
////////////////////////////////////



function modfifierLaListeConcernantLeContactEnCliquantSurLeBouttonModifier(button) {

  let addressBook = [];
  if (getLocalstorage()) {
    addressBook = getLocalstorage();
  }

  let index = button.data('contact');
  $contact = addressBook[index]

   $('#inputEmail').val($contact.email);
   $('#inputAddress').val($contact.address);
   $('#inputCity').val($contact.city);
   $('#inputZip').val($contact.zipcode);

  $('form').data('mode','edit').show();
}

/////////////////////////////////////////////////////
function afficheTousLesContacts(contacts = []) {
  contacts = getLocalstorage();

  $affiche = $('#afficheContacts');

  contacts.forEach((contact, index) =>  {
    generateHtml(contact, index);
  });


}


function effaceOneContact(contact = '') {
  $('.js-delete').click(function() {
    let contacts = getLocalstorage();
    contact = contacts[$(this).attr('data-contact')];
      // #2  tous les contacts
      // array.splice(data-contact, 1);

    contacts.splice($(this).attr('data-contact'), 1);
    console.log(contact);

    // $(this).parent().parent().hide();
    localStorage.setItem('Contacts', JSON.stringify(contacts));
    contacts = getLocalstorage();
    $('.list-group').remove();
    afficheTousLesContacts(contacts);
    effaceOneContact();
  });
}

function ajouteUnContact(contact, index) {
  generateHtml(contact, index);
}

function putToLocalStorage() {
  let contact = {
    "email": $('#inputEmail').val(),
    "address": $('#inputAddress').val(),
    "city": $('#inputCity').val(),
    "zipcode": $('#inputZip').val()
  };

  let array = [];

  if(array = getLocalstorage()) {
    array.push(contact);
    localStorage.setItem('Contacts', JSON.stringify(array));
    ajouteUnContact(contact, array.length - 1);

    return $form.trigger("reset");
  }
  array.push(contact);
  $form.trigger("reset");
  return localStorage.setItem('Contacts', JSON.stringify(array));
}
