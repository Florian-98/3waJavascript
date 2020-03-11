// const canvas = document.getElementById('canvas');
// canvas.width = window.innerWidth / 2;
// canvas.height = window.innerHeight / 2;
// const context = canvas.getContext('2d');
//
// context.beginPath();
// context.fillStyle = 'cyan';
// context.arc(100, 100, 100, 0, Math.PI * 2 );
//
// context.fill();
// context.stroke();
//
// document.addEventListener('resize', function() {
//   canvas.width = window.innerWidth / 2 ;
//   canvas.height = window.innerHeight / 2 ;
// })
//
// context.beginPath();
// context.rect(25, 75, 150 ,50);
// context.fillStyle = 'black';
// context.strokeStyle = 'black';
// context.fill();
// context.stroke();
//
// document.addEventListener('click', function() {
//   context.beginPath();
//   context.moveTo(10,10);
//   context.lineTo(300, 200);
//   context.strokeStyle = 'red';
//   context.stroke();
//
// });
//
// document.addEventListener('click', function(e){
//
// nombre = Math.floor(Math.random()*256);
// nombre2 = Math.floor(Math.random()*256);
// nombre3 = Math.floor(Math.random()*256);
// nombre4 = Math.floor(Math.random()*256);
// context.beginPath();
// context.moveTo(e.x, e.y);
// context.strokeStyle = `rgba(${nombre},${nombre2},${nombre3},${nombre4})`;
// context.lineTo(e.x * Math.random(), e.y * Math.random());
// context.stroke();
//
//
//
// })
const canvas = document.getElementById('canvas');
canvas.width = '800' ;
canvas.height = '600';
const context = canvas.getContext('2d');
canvas.style.backgroundColor = 'white';
canvas.style.border = '20px ridge gold';



document.addEventListener('click', function(e) {
  let mousePos = new MousePosition(canvas, e);
  new Draw(mousePos);
});



class MousePosition {
  constructor(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    return {
      x: (event.clientX - rect.left) * (canvas.width / rect.width),
      y: (event.clientY - rect.top) * (canvas.height / rect.height)
    };
  }

}

class Draw
{
  constructor(mousePos) {

    this.color = {
      r: Math.floor(Math.random() * 256),
      g: Math.floor(Math.random() * 256),
      b: Math.floor(Math.random() * 256),
      a: Math.random(),
    }

    this.mousePos = mousePos;

    this.drawCircle();
  }

  drawCircle() {
    context.beginPath();

    context.fillStyle = `rgba(${this.color.r},${this.color.g},${this.color.b}, ${this.color.a})`;

    context.arc(this.mousePos.x, this.mousePos.y, this.color.b / 2, 0, Math.PI * 2 );

    context.fill();
  }
}
