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
        // when we use save and restire together means everything between is going to be caleed within its own context
        c.save();
        c.translate(this.position.x, this.position.y);    //we are bringing canvas to the center so player movoes accordingly
        c.rotate(this.rotation);                //we are rotating the whole canvas
        c.translate(-this.position.x, -this.position.y);   //canvas back to original position
        c.arc(this.position.x, this.position.y, 5, 0, Math.PI * 2, false)  //arc is a way to draw a circle
        c.fillStyle = 'red'
        c.fill()
        //                                  radius, begin angle of arc, ending angle, complete circle
      // c.fillStyle = 'red'
      // c.fillRect(this.position.x, this.position.y, 100, 100)
     //in canvas when youre going down youre adding values when youre going up substracting values
      c.beginPath()  //this is require when we are using moveto w closepath
      c.moveTo(this.position.x + 30, this.position.y)
      c.lineTo(this.position.x - 10, this.position.y - 10)
      c.lineTo(this.position.x - 10, this.position.y + 10)
      c.closePath()   //this is going to draw a line automatically for us

      c.strokeStyle = 'white'
      c.stroke()
      c.restore();
    }

    update() {
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
      }
    
}

const player = new Player({
    position: { x: canvas.width / 2, y: canvas.height / 2 },
    velocity: { x: 0, y: 0 },
  })
  

  player.draw();

  const keys = {
    w: {
      pressed: false,
    },
    a: {
      pressed: false,
    },
    d: {
      pressed: false,
    },
  }

  const SPEED=3;
  const ROTATIONAL_SPEED=0.05;
  const FRICTION=0.97;

  function animate() {
    const animationId = window.requestAnimationFrame(animate)  //we are calling animate again and again
    c.fillStyle='black'
    c.fillRect(0,0, canvas.width, canvas.height); //first two args are position other two are width and height
    player.update();
    if (keys.w.pressed) {
        player.velocity.x = Math.cos(player.rotation)*SPEED
        player.velocity.y = Math.sin(player.rotation)*SPEED
    }

    else if (!keys.w.pressed) {
        player.velocity.x *= FRICTION    //TO STOP SMOOTHLY
        player.velocity.y *= FRICTION
      }

    if(keys.d.pressed) player.rotation+=ROTATIONAL_SPEED; 
    else if (keys.a.pressed) player.rotation -= ROTATIONAL_SPEED;
  }  


  animate();

  window.addEventListener('keydown', (event) => {
    switch (event.code) {
      case 'KeyW':
        keys.w.pressed = true
        break
      case 'KeyA':
        keys.a.pressed = true
        break
      case 'KeyD':
        keys.d.pressed = true
        break
    }
    })

    window.addEventListener('keyup', (event) => {  //when we release a key
        switch (event.code) { 
          case 'KeyW':
            keys.w.pressed = false
            break
          case 'KeyA':
            keys.a.pressed = false
            break
          case 'KeyD':
            keys.d.pressed = false
            break
        }
      })
  


