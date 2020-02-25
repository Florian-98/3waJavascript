let div = document.querySelector('div');
let button = document.getElementById('toggle-rectangle')


div.addEventListener('mouseenter', function() {
    div.classList.add('important');

});

div.addEventListener('mouseout', function() {
  div.classList.remove('important');
});

div.addEventListener('dblclick', function() {
  if (div.classList.contains('good')) {
    return div.classList.remove('good');
  }

  div.classList.add('good');

});



button.addEventListener('click', function() {
  if (div.style.display == 'none') {
    return div.style.display = 'block';

  }

  div.style.display = 'none';

})
