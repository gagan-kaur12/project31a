const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Events = Matter.Events;

var engine, world;

var ground,division = [];
var plinko = [];
var  particles = [];
var divisionHeight= 300;
var score = 0;
function preload() {
  
}

function setup(){
    var canvas = createCanvas(800,700);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(width/2,700,width,20);
    divisions = new Division(width/2,680,width,20);

    for(var k=0;k<= width; k=k+80){
    division.push(new Division(k,height-divisionHeight/2,10, divisionHeight));
    }

   for(var j=75; j <= width; j=j+50){
       plinko.push(new Plinko(j,75,10));
   }
   for(var j=50; j <= width-10; j=j+50){
    plinko.push(new Plinko(j,175));
}
for(var j=75; j <= width; j=j+50){
    plinko.push(new Plinko(j,275));
}
for(var j=50; j <= width; j=j+50){
    plinko.push(new Plinko(j,375));
}
}

function draw(){
    background(0);
    push();
    textSize(30)
    strokeWeight(2);
    stroke("pink")
    text("score :"+score,20,120);
    pop();
    Engine.update(engine);
   console.log(plinko[1])
    ground.display();
   
    divisions.display();

    for(k =0;k< division.length;k++){
        division[k].display();
    }
     
    for(var i = 0; i< plinko.length; i++){
        plinko[i].display();
       
    }

    if(frameCount%60 === 0){
        particles.push(new Particle(random(width/2-30,width/2+30),10,10))
        score++;
    }
    for(var j=0;j< particles.length; j++){
        particles[j].display();
    }
}
