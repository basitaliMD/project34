const Engine= Matter.Engine;
const World=  Matter.World;
const Bodies=  Matter.Bodies;
const Constraint= Matter.Constraint;

var world, engine;

var hero, heroImg;
var monster, monsterImg;
var ground, ground2;
var bgimg; 
var sling;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10;
var block11, block12, block13, block14, block15, block16, block17;
var block18, block19, block20, block21;

function preload() {
bgimg = loadImage("images/GamingBackground.png");
monsterImg = loadImage("images/Monster-01.png");
heroImg = loadImage("images/Superhero-01.png");
}

function setup() {
createCanvas(3000, 2000);
engine = Engine.create();
world = engine.world;

block1 = new Block(660, 210, 40, 40);
block2 = new Block(660, 250, 40, 40);
block3 = new Block(660, 290, 40, 40);
block4 = new Block(660, 330, 40, 40);
block5 = new Block(660, 370, 40, 40);
block6 = new Block(660, 410, 40, 40);
block7 = new Block(660, 450, 40, 40);

block8 = new Block(600, 210, 40, 40);
block9 = new Block(600, 250, 40, 40);
block10 = new Block(600, 290, 40, 40);
block11 = new Block(600, 330, 40, 40);
block12 = new Block(600, 370, 40, 40);
block13 = new Block(600, 410, 40, 40);
block14 = new Block(600, 450, 40, 40);

block15 = new Block(550, 210, 40, 40);
block16 = new Block(550, 250, 40, 40);
block17 = new Block(550, 290, 40, 40);
block18 = new Block(550, 330, 40, 40);
block19 = new Block(550, 370, 40, 40);
block20 = new Block(550, 410, 40, 40);
block21 = new Block(550, 450, 40, 40);

ground = new Ground(350, 460, 800, 10);
ground2 = new Ground(900, 300, 300, 10);

monster = new Monster(900, 150, 40, 40);
hero = Bodies.circle(50, 200, 150);
World.add(world, hero);

sling = new Fly(this.hero,{x:200,y:180});
}

function draw() {
background(bgimg);
Engine.update(engine);

sling.display();

fill("yellow");
block1.display();
block2.display();
block3.display(); 
block4.display();
block5.display(); 
block6.display(); 
block7.display(); 
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display(); 
block15.display();
block16.display();
block17.display();
block18.display();
block19.display();
block20.display();
block21.display();

ground.display();

monster.display();

textSize(50);
fill("red");
text("CORONA",800, 400);

imageMode(CENTER);
image(heroImg, hero.position.x, hero.position.y, 300, 150);
}

function mouseDragged() {
Matter.Body.setPosition(this.hero, {x: mouseX, y: mouseY})
}

function mouseReleased() {
sling.fly();
}   