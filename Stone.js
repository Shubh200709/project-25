class Stone {
constructor(x,y,width,height){
    var options={
        'restitution':0.8,
        'friction':0.9,
        'density':12
    };

    this.width=width;
    this.height=height;
    this.body=Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body);
};
display(){
    var stonepose=this.body.position;
    var stoneangle=this.body.angle;

    push();
    translate(stonepose.x,stonepose.y);
    rotate(stoneangle);
    strokeWeight(3);
    stroke('darkbrown');
    fill("brown");
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop();

  }
};