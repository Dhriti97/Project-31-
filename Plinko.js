class Plinko{
    constructor(x,y){
        var options = {
          
            restitution:1,
            friction:2,
            density:4,
            isStatic:false
        }
        this.body=Bodies.circle(this.x,this.y,this.r,options);
        this.x=x;
        this.y=y;
        this.r=10;
        World.add(world,this.body);
    }

    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);  
      fill("white");
      ellipse(this.x,this.y,10);
      pop();
        
    }
}