
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var stand1,stand2;
var b1,b2,b3,b4,b5,b6,b7,b8,b9;
var b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,b21,b22,b23,b24,b25,b26;
var polygon, polygonimg

function preload(){
polyonimg= loadImage("polygon.png")
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
 
    stand1=new Ground(400,250,250,20);
stand2=new Ground(900,350,250,20)
b1=new Box(308,220,30,40)
b2=new Box(348,220,30,40)
b3=new Box(388,220,30,40)
b4=new Box(428,220,30,40)
b5=new Box(468,220,30,40)
b6=new Box(508,220,30,40)

b7=new Box(328,180,30,40)
b8=new Box(488,180,30,40)
b9=new Box(368,180,30,40)
b10=new Box(408,180,30,40)
b11=new Box(448,180,30,40)

b12=new Box(408,138,30,40)
b13=new Box(368,138,30,40)
b14=new Box(448,138,30,40)

b15=new Box(408,96,30,40)

b16=new Box(949,320,30,40)
b17=new Box(859,320,30,40)
b18=new Box(889,320,30,40)
b19=new Box(919,320,30,40)

b20=new Box(850,280,30,40)
b21=new Box(955,280,30,40)


polygon =Bodies.circle(50,200,10);
World.add(world,polygon )

sling= new SlingShot(this.polygon,{x:100,y:200});

    var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1600,
		  height: 700,
		  wireframes: false
		}
	  });
  
	
	Render.run(render);
}

function draw(){
stand1.display();
stand2.display();
b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
b6.display();
b7.display();
b8.display();
b9.display();
b10.display();
b11.display();
b12.display();
b13.display();
b14.display();
b15.display();
b16.display();
b17.display();
b18.display();
b19.display();
b20.display();
b21.display();

sling.display();



}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    SlingShot.fly();
}
