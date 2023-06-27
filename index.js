const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');  //c is context   use this to maipulate whatever we see on canvas
canvas.width=window.innerWidth   //innerwidh is full width
canvas.height=window.innerHeight;

// console.log(c);

c.fillStyle='black'
c.fillRect(0,0, canvas.width, canvas.height); //first two args are position other two are width and height
// 100px from left, 100px from top

