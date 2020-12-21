const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function preload(){
img = loadImage("polygon.png")



}

function setup (){
    
createCanvas(900,400)

engine = Engine.create();
world = engine.world;

box1 = new Box(300,275)
box2 = new Box(330,275)
box3 = new Box(360,275)
box4 = new Box(390,275)
box5 = new Box(420,275)
box6 = new Box(450,275)
box7 = new Box(480,275)
box8 = new Box(330,235)
box9 = new Box(360,235)
box10 = new Box(390,235)
box12 = new Box(420,235)
box13 = new Box(450,235)
box14 = new Box(360,195)
box15 = new Box(390,195)
box16 = new Box(420,195)
box17 = new Box(390,155)

stand = new Stand (390,300,250,10)
ball = Bodies.circle(50,200,20)
World.add(world,ball)
Slingshot = new SlingShot (this.ball,{x:100,y:200})



}

function draw(){
    background("red")
    Engine.update(engine);
box1.display()
box2.display()
box3.display()
box4.display()
box5.display()
box6.display()
box7.display()
box8.display()
box9.display()
box10.display()
box12.display()
box13.display()
box14.display()
box15.display()
box16.display()
box17.display()
stand.display()
Slingshot.display()
imageMode (CENTER )
image( img, ball.position.x,ball.position.y,40,40)

}
function mouseDragged(){
    
        Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
    
}


function mouseReleased(){
    Slingshot.fly();
    
}