const can=document.getElementById("canvas1");
const ctx=can.getContext('2d');
let isDraw=false;
can.width=window.innerWidth;
can.height=window.innerHeight;
// ctx.fillStyle="white";
// ctx.fillRect(10,10,350,250);

window.addEventListener('resize',function(){
	can.width=window.innerWidth;
    can.height=window.innerHeight;
	// ctx.fillStyle="white";
 //    ctx.fillRect(10,10,300,250);
})

const mouse = {
	x:undefined,
	y:undefined,
}

can.addEventListener('mousedown',function(){
	isDraw=true;
})

can.addEventListener('mousemove',function(event){
      if(isDraw){
     	mouse.x=event.x;
     	mouse.y=event.y;
     	drawCircle();
     }
})

can.addEventListener('mouseup',function(){
     isDraw=false;
})

can.addEventListener('mousemove',function(event){
  if(isDraw){
 mouse.x=event.x;
 mouse.y=event.y;
 drawCircle();
}
})

function drawCircle(){
   ctx.fillStyle="white";
   ctx.strokeStyle="green";
   ctx.lineWidth=6;
   ctx.beginPath();
   ctx.arc(mouse.x,mouse.y,10,0,Math.PI*2);
   ctx.stroke();
   ctx.fill();
}





   
