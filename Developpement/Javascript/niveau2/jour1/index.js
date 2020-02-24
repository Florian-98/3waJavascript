let div = document.querySelector('div');
let button = document.getElementById('toggle-rectangle')


div.addEventListener('mouseenter', function() {
    div.classList.add('important');
    console.log('mouse enter');
});

div.addEventListener('mouseout', function() {
  div.classList.remove('important');
});

div.addEventListener('dblclick', function() {
  div.classList.add('good');

});

div.addEventListener('dblclick', function() {
  div.classList.remove('good');


});

button.addEventListener('click', function() {
  div.style.display = 'none'
  

})
