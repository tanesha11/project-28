class Tree{
    constructor(x,y,width,height) {
        var options ={
            'restitution':0,
            'friction':0.5,
            "isStatic":true,
            'density':1.2
        }
        this.treeImage = loadImage("sprites/tree.png");
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
      image(this.treeImage,this.body.position.x,this.body.position.y,50,50);
      var pos = this.body.position;
      rectMode(CENTER);
      rect(pos.x, pos.y, this.width, this.height);
    }
} 