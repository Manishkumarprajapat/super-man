class Monster {
    constructor(x,y,width,height,angle) {
      var options = { 
          isStatic:false,
        
       };
  
      this.body = Bodies.rectangle(500, 100, 200, 100, options);
      
      this.monsterimage=loadImage("Monster-01.png")
      //this.image.scale=0.1
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
  
    display() {
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      image (this.monsterimage,300,10,100,100)
      rotate(angle);
      fill ("blue")
     
      pop();
    }
  }