class Souris {

   mouvementSouris(rect) {
    ardoise.addEventListener('mousedown', e => {
      this.mousePosX = e.clientX - rect.left;
      this.mousePosY = e.clientY - rect.top;
      dessin = true;
    });

    ardoise.addEventListener('mousemove', e => {
      if (dessin) {
        this.newMousePosX = e.clientX - rect.left;
        this.newMousePosY = e.clientY - rect.top;
        ligne.ligneDessin(context, this.mousePosX, this.mousePosY,  this.newMousePosX, this.newMousePosY, lineWidth);
        this.mousePosX = this.newMousePosX;
        this.mousePosY = this.newMousePosY;
      }
    });

    window.addEventListener('mouseup', e => {
      dessin = false;
    });
  }
}
