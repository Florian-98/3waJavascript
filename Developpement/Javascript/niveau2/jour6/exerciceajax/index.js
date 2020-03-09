
// // // JQUERY AJAX REQUEST

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    let gethtmldata = document.querySelector('#gethtmldata').value;
    let getjsondata = document.querySelector('#getjsondata').value;
    let getmovies = document.querySelector('#getmovies').value;

    const data = {
        ok: gethtmldata
    };

    console.log(data);
    $.ajax({
      url: "getjson.php",
      type: 'GET',
      data: `query=${data.gethtmldata}`,
      success: function(data) {
        console.log(data);
      }
    });
});
