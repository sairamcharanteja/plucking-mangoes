class Mango{
    constructor(x, y, r) {
        var options = {
            isStatic:true,  
          'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        
        this.r = r;
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(this.x,this.y,this.r, options);
        this.image = loadImage("mango.png");
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipse(pos.x, pos.y, this.r);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r*3, this.r*3);
        pop();
      }
}