class Effacer {

  Gomme() {

    btnsGomme.forEach(function(btn) {
      btn.addEventListener('click', function() {
        lineWidth = parseInt(this.getAttribute('data-size'));
        strokeStyle = 'white';
      });
    });
  }

  toutEffacer() {

    resetBoutton.addEventListener('click', function() {
      context.clearRect(0, 0, ardoise.width, ardoise.height);
    });

  };
}
