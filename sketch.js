const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var tower1, tower2, tower3, tower4;
var main;
var door;
var flag, flagtop;
var window1, window2;

function setup() {
  createCanvas(800, 600);
  engine = Engine.create();
  world = engine.world;
  tower1 = new Tower(50, 147, 60, 450);
  tower2 = new Tower(120, 196, 60, 400);
  main = new Tower(190, 246, 400, 350);
  tower3 = new Tower(599, 196, 60, 400);
  tower4 = new Tower(669, 147, 60, 450);
  door = new Tower(365, 446, 80, 150);
  flag = new Tower(390, 94, 10, 150);
  flagtop = new Tower(390, 90, 50, 20);
  window1 = new Tower(240, 310, 60, 50);
  window2 = new Tower(470, 310, 60, 50);
}

function draw() {
  background("black");
  Engine.update(engine);  
  tower1.display();
  tower2.display();
  main.display();
  tower3.display();
  tower4.display();
  door.display();
  flag.display();
  flagtop.display();
  window1.display();
  window2.display();
}