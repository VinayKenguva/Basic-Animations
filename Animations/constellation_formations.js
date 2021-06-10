const can=document.getElementById('canvas1');
const ctx=can.getContext('2d');
can.width=window.innerWidth;
can.height=window.innerHeight;

window.addEventListener('resize',function(){
	can.width=window.innerWidth;
	can.height=window.innerHeight;
})

let mouse={
	x:undefined,
	y:undefined,
}
let ct=1;
class Particle{
	constructor(){
		this.x=mouse.x;
		this.y=mouse.y;
		this.x2=Math.random()*10-5;
		this.y2=Math.random()*10-5;
		this.size=10;
		this.dec=Math.random()*4.9;
		this.color='hsl('+ct+',100%,50%)';
	}
	update(){
		this.x+=this.x2;
		this.y+=this.y2;
		this.size-=this.dec;
	}
	draw(){
		ctx.fillStyle=this.color;
		ctx.beginPath();
		ctx.arc(this.x,this.y,this.size,0,360);
		ctx.fill();
	}
}
let p=new Particle();
p.draw();
let particlearray=[];


window.addEventListener('mousemove',function(event){
      mouse.x=event.x;
      mouse.y=event.y;
      for(let i=0;i<10;i++)
		particlearray.push(new Particle());
	 ct+=3;
})

function animate(){
	ctx.fillStyle='rgba(0,0,0)';
	ctx.fillRect(0,0,can.width,can.height);
	for(let i=0;i<particlearray.length;i++)
		{
			if(particlearray[i].size<0.2)
                 {particlearray.splice(i,1);i--;}
                   
			else{
			  particlearray[i].draw();
		      particlearray[i].update();

		    for(let j=i;j<particlearray.length;j++){
		    	
		    	let dx=particlearray[i].x-particlearray[j].x;
		    	let dy=particlearray[i].y-particlearray[j].y;
		    	let dist=Math.sqrt(dx*dx + dy*dy);
		    	if(dist<100)
		    	{
		            ctx.beginPath();
		    		ctx.strokeStyle=particlearray[j].color;
		    		ctx.linewidth=0.3;
		    		ctx.moveTo(particlearray[i].x,particlearray[i].y);
		    		ctx.lineTo(particlearray[j].x,particlearray[j].y);
		    		ctx.stroke();
		    		ctx.closePath();

		    	}
		    
              } 
		    }
		}

	requestAnimationFrame(animate);

}
animate();