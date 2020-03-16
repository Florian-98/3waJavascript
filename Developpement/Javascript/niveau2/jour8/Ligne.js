class Ligne {

  ligneDessin(context, x1, y1, x2, y2, lineWidth) {
    context.beginPath();
    context.strokeStyle = strokeStyle;
    context.lineWidth = lineWidth;
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    context.closePath();

  };

  epaisseurDeLigne() {

    btnsForLine.forEach(function(btn) {
      btn.addEventListener('click', function() {
        lineWidth = parseInt(this.getAttribute('data-width'));
      });
    });
  }
  couleurDeLigne() {
    btnsWithColors.forEach(function(btn) {
      btn.addEventListener('click', function() {
        strokeStyle = this.getAttribute('data-color');
      });
    });

    pipette.addEventListener('change', function() {
      strokeStyle = pipette.value ;

    });
  }
}
