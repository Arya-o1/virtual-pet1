//Create variables here
var dog;
var dogimg1,dogimg2;
var foodS ,database;

function preload()
{
  //load images here
  dogimg1 = loadImage("happydog.png");
  dogimg2 = loadImage("Dog.png");

}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();

  dog = createSprite(250,250,50,50);
  dog.addImage(dogimg2);
  dog.scale = 0.2;

  foodstock = database.ref('Food');
  foodstock.on("value",readstock);

  writestock(20);
  
}


function draw() {  
  background("lightblue");
  // readstock();

  drawSprites();
  textSize(20);
  fill("red");
  text("stock =" + foodS,200,360);
  fill("black");
  text("NOTE : PRESS UP ARROW KEY TO FEED 'RICKY' ",50,490);


  if(keyWentDown(UP_ARROW)){
    // console.log("gugj");
    dog.addImage(dogimg1);
    writestock(foodS-1);
  ;
  }
  //add styles here

}

function writestock(x){
  if(x <= 0){
    x = 0;
  }
  else{
    database.ref('/').update({
      Food:x
    })
  }
  
}

function readstock(data){
  console.log("ggf")
  foodS = data.val();
}

// function showError(){
//   console.log("error");
// }


