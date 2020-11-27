const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,object;

var ground;


function setup() {
  var canvas = createCanvas(400,400);
  
  engine=Engine.create();
  world=engine.world;

  var options={
          isStatic:true
  }

var ball_options = {
      restitution:1.0 
}

 ball = Bodies.circle(200,100,20,ball_options);
 World.add(world,ball);

 ground=Bodies.rectangle(200,200,50,50,options);
 World.add(world,ground);
  //  console.log(object.position);
  //  console.log(object.type);
      console.log(ground);
}

function draw() {
  background(0); 
  rectMode(CENTER);
  Engine.update(engine);
  rect(ground.position.x,ground.position.y,50,50);
  
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}