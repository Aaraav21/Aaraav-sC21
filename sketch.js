var frect,mrect;
var ob1,ob2,ob3,ob4;
function setup() {
  createCanvas(500,500);
  frect=createSprite(150,250,50,70);
  mrect=createSprite(425,320,50,70);
  frect.shapeColor="white";
  mrect.shapeColor="yellow";
  ob1=createSprite(100,100,50,50);
  ob2=createSprite(200,350,50,50);
  ob3=createSprite(300,300,50,50);
  ob4=createSprite(400,400,50,50);
  ob1.shapeColor="green";
}

function draw() {
  background("red");
  mrect.x=World.mouseX;
  mrect.y=World.mouseY; 
  if(isTouching(mrect,ob1)){
    ob1.shapeColor="black";
    mrect.shapeColor="purple";
  }
  else{
    ob1.shapeColor="green";
    mrect.shapeColor="yellow";
  }
  drawSprites();
}
function isTouching(object1,object2){
  if(object1.x-object2.x<object1.width/2+object2.width/2
    && object2.x-object1.x<object1.width/2+object2.width/2
    &&object1.y-object2.y<object1.height/2+object2.height/2
    &&object2.y-object1.y<object1.height/2+object2.height/2){
   return true; 
  }
  else{
  return false;  
  }
}