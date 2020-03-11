document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

  $form = $(this).serializeArray();

  let url = 'contenu_html.php';


  if($form[0].value == 'json') {
    url = 'json.php';
  }

  if($form[0].value == 'film') {
    url = 'film.php';
  }

    $.ajax({
      type: "GET",
      url: url,
      data: $form,
      success: function(data) {
         allFunction($form[0].value, data)
      }
  });
});




function allFunction(choixUser, data) {
  if (choixUser == 'film') {
    afficherFilms(data);
  }

  if (choixUser == 'json') {
    afficherJson(data);
  }

  if (choixUser == 'html') {
    afficherHtml(data);
  }
};





function afficherHtml(tableau) {
  $('#response').html(tableau);
}





function afficherFilms(film) {
  let ul = document.createElement('ul');

  film.forEach(function(f) {
    ul.innerHTML += `
      <li class="">${f.title}<img src="${f.image}" alt="${f.title}"></li>

    </ul>
    `;
});

  $('#response').html(ul); // .html -> assigne de l'html
};





function afficherJson(person) {

let ul = document.createElement('ul');

ul.innerHTML += `
    <li class="">${person.firstname}</li>
    <li class="">${person.lastname}</li>
    <li class="">${person.email}</li>
    <li class="">${person.number}</li>
    <li class="">${person.address}</li>
</ul>`;

  $('#response').html(ul);
}
