class Box{
    constructor(x,y,widht,height,options){
var options = {
    restitution:0.5,
    friction:0.7,
    density:1.2,
}
    this.body = Bodies.rectancle(200,100,50,50,options);
    this.wight= widht;
    this.height=height;
    this.add(World.this.body);
}
display(){
var pos=this.body.position;
var angle=this.body.angle;

push();
translate(pos.x,pos.y);
rotate(angle);

rectMode(CENTER);
fill("red");
rect(0,0,this.widht,this.height);
pop();
}
}