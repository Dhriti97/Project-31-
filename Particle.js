class Particle{
    constructor(x,y,r){
        var options = {
          
            restitution:1,
            friction:2,
            density:4,
            isStatic:false
        }
        this.body=Bodies.circle(this.x,this.y,this.r,options);
        this.color = color(random(0,255),random(0,255),random(0,255));
        this.x=x;
        this.y=y;
        this.r=r;
        World.add(world,this.body);
    }

    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);  
        fill(this.color);
        ellipse(0,0,10,this.color);
        pop();
          
      }
}