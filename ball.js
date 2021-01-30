class Ball {
    constructor(x,y,width,height,angle) {
      var options = { 
        density: 1, 
        frictionAir: 0.005};
  
      this.body = Bodies.rectangle(100, 100, 200, 100, options);
      
      this.image=loadImage("Superhero-01.png")
      //this.image.scale=0.1
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
  
    display() {
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      image (this.image,100,10,100,100)
      rotate(angle);
      fill ("blue")
     
      pop();
    }
  }