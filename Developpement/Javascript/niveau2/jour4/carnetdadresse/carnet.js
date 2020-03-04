document.addEventListener('DOMContentLoaded', function() {

  $form = $('#form');
  $form.hide();

  afficheTousLesContacts();
  submitForm();
  showForm($('#showForm'));
  effaceOneContact();
});



function showForm(obj) {
  obj.on('click', function(e) {
    e.preventDefault();
    $form.fadeToggle('500');
  })
}

function submitForm() {
  $form.on('submit', function(e) {
    e.preventDefault();

    putToLocalStorage();

  });
}


function getLocalstorage() {
  let array = [];

  if(localStorage.getItem('Contacts') && JSON.parse(localStorage.getItem('Contacts')).length) {
      array = JSON.parse(localStorage.getItem('Contacts'));
  }

  return array;
}



function afficheTousLesContacts() {
  let contacts = getLocalstorage();

  $affiche = $('#afficheContacts');

  contacts.forEach((contact, index) =>  {
    let html = `
      <ul class="list-group shadow p-3 mb-5 bg-white rounded ml-2 mr-2">
        <li class="list-group-item">${contact.email}</li>
        <li class="list-group-item">${contact.address}</li>
        <li class="list-group-item">${contact.zipcode}</li>
        <li class="list-group-item">${contact.city}</li>
        <li class="list-group-item"><button class="btn btn-xs btn-info js-edit" data-contact=${index}>Editer</button></li>
      </ul>
    `;

    $affiche.append(html);
  });
}


function effaceOneContact() {

  $('.js-edit').click(function() {
      let contacts = getLocalstorage();
      console.log();
      // #2  tous les contacts
      // array.splice(data-contact, 1);
      contacts.splice($(this).attr('data-contact'), 1);
      localStorage.setItem('Contacts', JSON.stringify(contacts));
      const html = '';

      afficheTousLesContacts();
  });



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

    return $form.trigger("reset");
  }

    return console.error('Error: Une chose horrible s\'est produite');
}
