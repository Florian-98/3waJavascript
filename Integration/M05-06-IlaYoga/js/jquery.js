

$email = $('#email');
$lastname = $('#lastname');
$firstname = $('#firstname');
let firstname = document.querySelector('#firstname');
//
// console.log($firstname);
// console.log(firstname);
$firstname.fadeOut();
$firstname.fadeOut('slow');
$firstname.fadeOut('fast');
$firstname.hide();

$firstname.fadeIn();
$firstname.fadeIn('slow');
$firstname.fadeIn('fast');
$firstname.fadeIn(2000);

$firstname.fadeToggle('slow');
$firstname.fadeToggle(3000);
//Javascript = firstname.value;
console.log(firstname.value);
$('#lastname').val();


$('.send_btn').on('click' ,function(e){
  e.preventDefault();
  console.log(e.target);
  console.log(e.target.getAttribute('type'));
  console.log(this.getAttribute('type'));
  console.log(this);
  console.log($(this).attr('data-contact'));
  console.log();

});
