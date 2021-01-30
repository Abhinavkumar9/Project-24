class Paper {  
    constructor(x, y, radius){
        var options = {
            'restitution':1.0,
            'friction':0.2,
            'density':0.8,
        }
        this.x=x;
         this.y=y;
         this.radius = radius

       this.image = loadImage("sprites/cr.png");
        this.body = Bodies.circle(x, y, radius, options);
	    World.add(world, this.body);
       
        
   }
   display()
{
var paperpos=this.body.position;

push()
translate(paperpos.x, paper.y)
rectMode(CENTER)
    fill("255,0,255");
imageMode(CENTER)
   // ellipseMode(RADIUS);
   // ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
  image(this.image,0, 0, 50,60);
pop()
}
}
