const can=document.getElementById("canvas1");
const ctx=can.getContext('2d');
let isDraw=false;
can.width=window.innerWidth;
can.height=window.innerHeight;

window.addEventListener('resize',function(){
  can.width=window.innerWidth;
    can.height=window.innerHeight;
})


const particlearray = [];

class Particle{

  constructor(){
    this.x=Math.random()*can.width;
    this.y=Math.random()*can.height;
  }

  update(){
    this.x+=Math.random()*10-5;
    this.y+=Math.random()*10-5;
  }

  draw(){
   ctx.fillStyle="white";
   ctx.strokeStyle="green";
   ctx.lineWidth=6;
   ctx.beginPath();
   ctx.arc(this.x,this.y,10,0,Math.PI*2);
   ctx.stroke();
   ctx.fill();
  }
}


function initialise(){
  for(let i=0;i<100;i++)
    {particlearray.push(new Particle());}
}
initialise();

function animate(){
  ctx.clearRect(0,0,can.width,can.height);
  for(let i=0;i<100;i++)
    {particlearray[i].draw();
      particlearray[i].update();}
      requestAnimationFrame(animate);
}

animate();