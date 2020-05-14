var bullet1,bullet2,bullet3,bullet4;
var colls1,colls2,colls3,colls4;
var speed;
var speed2;
var speed3;
var speed4;
var weight;
var deformation;
var deformation2;
var deformation3;
var deformation4;
var width1;
var thickness,thickness2,thickness3,thickness4;
function setup()
{
    createCanvas(1600,600);

    speed = random(40,80);
    speed2 = random(40,80);
    speed3= random(40,80);
    speed4= random(40,80);
    weight = random(500,1200);

    bullet1 = createSprite(200,200,30,10);
    bullet1.shapeColor = "white";

    bullet2 = createSprite(200,300,30,10);
    bullet2.shapeColor = "white";

    bullet3 = createSprite(200,400,30,10);
    bullet3.shapeColor = "white";

    bullet4 = createSprite(200,500,30,10);
    bullet4.shapeColor = "white";

    colls1 = createSprite(1400,200,random(40,65),50);
    colls1.shapeColor = "grey";

    colls2 = createSprite(1400,300,random(40,65),50);
    colls2.shapeColor = "grey";

    colls3 = createSprite(1400,400,random(40,65),50);
    colls3.shapeColor = "grey";

    colls4 = createSprite(1400,500,random(40,65),50);
    colls4.shapeColor = "grey";

    thickness = colls1.width;
    thickness2 = colls2.width;
    thickness3 = colls3.width;
    thickness4 = colls4.width;

    //width1 = random(5,10);

    bullet1.velocityX = speed;
    bullet2.velocityX = speed2;
    bullet3.velocityX = speed3;
    bullet4.velocityX = speed4;
}
function draw(){
  background("black");
if(hasCollided(bullet1,colls1)){
    bullet1.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10){
      colls1.shapeColor = color(255,0,0);
    }
    if(damage<10){
      colls1.shapeColor = color(0,255,0);
    }
  }

  if(hasCollided(bullet2,colls2)){
    bullet2.velocityX = 0;
    var damage = 0.5*weight*speed2*speed2/(thickness2*thickness2*thickness2);

    if(damage>10){
      colls2.shapeColor = color(255,0,0);
    }
    if(damage<10){
      colls2.shapeColor = color(0,255,0);
    }
  }

  if(hasCollided(bullet3,colls3)){
    bullet3.velocityX = 0;
    var damage = 0.5*weight*speed3*speed3/(thickness3*thickness3*thickness3);

    if(damage>10){
      colls3.shapeColor = color(255,0,0);
    }
    if(damage<10){
      colls3.shapeColor = color(0,255,0);
    }
  }

  if(hasCollided(bullet4,colls4)){
    bullet4.velocityX = 0;
    var damage = 0.5*weight*speed4*speed4/(thickness4*thickness4*thickness4);

    if(damage>10){
      colls4.shapeColor = color(255,0,0);
    }
    if(damage<10){
      colls4.shapeColor = color(0,255,0);
    }
  }
  drawSprites();
}
function hasCollided(bullet,wall){
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}
