//Create variables here
var dog,happydog
var FoodS,FoodStock
var database
function preload()
{
  //load images here
  dog = loadImage("Dog.png");
}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(120,300,120,40);
  dog = loadImage("Dog.png");
database = firebase.database();
FoodStock = database.ref('Food');
FoodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);
if(keyDown(UP_ARROW)){
 writeStroke(FoodS)
 dog.addImage('happydog.png');
}
  drawSprites();
  //add styles here
}
function readStock(data){
FoodS = data.val()
}
function writeStock(x){
database.ref('/').update({
  FoodS:x
})
}


