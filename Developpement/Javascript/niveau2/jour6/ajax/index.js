// // JS GET REQUEST
// document.querySelector('form').addEventListener('submit', function(e) {
//     e.preventDefault();
//
//     let xhttp = new XMLHttpRequest();
//
//     let prenom = document.querySelector('#prenom').value;
//     let nom = document.querySelector('#nom').value;
//     const data = { nom, prenom };
//     // const data = {
//     //     nom: nom,
//     //     prenom: prenom,
//     // };
//
//     // const form = document.querySelector('form');
//     // const formData = new FormData(form);
//
//     xhttp.open('GET', 'getjson.php?query=' + data.prenom, true);
//     xhttp.send();
//
//     xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             let response = JSON.parse(xhttp.response);
//
//             document.getElementById('response').innerHTML =
//                 response.results.status + ' ' + response.results.prenom;
//         }
//     };
// });
//
// // JS POST REQUEST
// document.querySelector('form').addEventListener('submit', function(e) {
//     e.preventDefault();
//
//     let xhttp = new XMLHttpRequest();
//
//     const form = document.querySelector('form');
//     const formData = new FormData(form);
//
//     xhttp.open('POST', 'postjson.php');
//
//     xhttp.send(formData);
//
//     xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             let response = JSON.parse(xhttp.response);
//
//             document.getElementById('response').innerHTML =
//                 response.$results.status;
//         }
//     };
// });
//
// // // JQUERY GET REQUEST
// document.querySelector('form').addEventListener('submit', function(e) {
//     e.preventDefault();
//
//     let prenom = document.querySelector('#prenom').value;
//     let nom = document.querySelector('#nom').value;
//
//     const data = {
//         nom: nom,
//         prenom: prenom,
//     };
//
//     $.get(
//         'getJson.php',
//         {
//             query: data.prenom,
//         },
//         function(data) {
//             document.getElementById('response').innerHTML = data.results.status;
//         }
//     );
// });
//
// // // // JQUERY POST REQUEST
// document.querySelector('form').addEventListener('submit', function(e) {
//     e.preventDefault();
//
//     let prenom = document.querySelector('#prenom').value;
//     let nom = document.querySelector('#nom').value;
//
//     const data = {
//         nom: nom,
//         prenom: prenom,
//     };
//
//     $.post(
//         {
//             url: 'postjson.php',
//             data: data,
//         },
//
//
//
//         function(data) {
//             document.getElementById('response').innerHTML = data.results.status;
//         }
//     );
// });



// // // JQUERY AJAX REQUEST
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    let prenom = document.querySelector('#prenom').value;
    let nom = document.querySelector('#nom').value;

    const data = {
        nom: nom,
        prenom: prenom,
    };


  $.ajax({
    url: "getjson.php",
    type: 'GET',
    data: `query=${data.nom}`,
    sucess: console.log('ok!')
  });
});
