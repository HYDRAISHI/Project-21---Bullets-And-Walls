var bullet, bullet_image, wall;
var wall_default, wall_cracked, wall_broken, wall_cracked_image, wall_broken_image;
var speed, weight;
var thickness,damage;

function preload() {
  bullet_image = loadImage("bullet.png");  
  wall_default = loadImage("wall.png");
  wall_cracked_image = loadImage("crackedwall.png");
  wall_broken_image = loadImage("brokenwall.png");
}

function setup() {
  createCanvas(1600,400);
  speed = random(220,320);
  weight = random(30,50);
  thickness = random(35,83);
  wall = createSprite(1500,200,thickness,height/2);
  bullet = createSprite(0, 200, 30,10);
  bullet.velocityX = 8;
  bullet.addImage("normal", bullet_image);
  bullet.scale = 0.3;
  wall.addImage("good", wall_default);   
}

function draw() {
  background(255,255,255);
  
  if(bullet.isTouching(wall)){
    damage = (0.5*weight*speed*speed/thickness*thickness*thickness);
    if(damage < 10){
      wall.visible = false;
      wall_cracked = createSprite(1500,200,wall.width,wall.height);
      wall_cracked.addImage("crack", wall_cracked_image);
    }
    else if(damage >= 10){
      wall.visible = false;
      wall_broken = createSprite(1500,200,wall.width,wall.height);
      wall_broken.addImage("broken", wall_broken_image);
    }
  }

  bullet.collide(wall);
  drawSprites();
}