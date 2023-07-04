const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');  //c is context   use this to maipulate whatever we see on canvas
canvas.width=window.innerWidth   //innerwidh is full width
canvas.height=window.innerHeight;

// console.log(c);

c.fillStyle='black'
c.fillRect(0,0, canvas.width, canvas.height); //first two args are position other two are width and height
// 100px from left, 100px from top


class Player {
    constructor({ position, velocity }) {
      this.position = position // {x, y}
      this.velocity = velocity
      this.rotation = 0
    }
  
    draw() {
        c.arc(this.position.x, this.position.y, 5, 0, Math.PI * 2, false)  //arc is a way to draw a circle
        c.fillStyle = 'red'
        c.fill()
        //                                     radius, begin angle of arc, ending angle, complete circle
      // c.fillStyle = 'red'
      // c.fillRect(this.position.x, this.position.y, 100, 100)
     //in canvas when youre going down youre adding values when youre going up substracting values
    
      c.moveTo(this.position.x + 30, this.position.y)
      c.lineTo(this.position.x - 10, this.position.y - 10)
      c.lineTo(this.position.x - 10, this.position.y + 10)
      c.closePath()   //this is going to draw a line automatically for us

      c.strokeStyle = 'white'
      c.stroke()
  
  
    }
}

const player = new Player({
    position: { x: canvas.width / 2, y: canvas.height / 2 },
    velocity: { x: 0, y: 0 },
  })
  

  player.draw();
  