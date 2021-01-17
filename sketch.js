
var foodCount=10;

function preload()
{

  hungryPaw=loadImage(EcoPaw.jpg)
  Paw=loadImage(sleepy.jpg)
}

function setup() {
	createCanvas(1200,600);
  
}


function draw() {  
  if(foodCount > 0){
  background(hungryPaw)
  if(keyDown("space")){
    foodCount = foodCount-1
  }
  strokeWeight(5)
  stroke("blue")
  Text("you have "+foodCount+" food left. press space to feed Eco Paw",350,300)
  }
  else {
   background(paw)
    strokeWeight(5)
    stroke("blue")
    Text("you have 0 food left, and Eco Paw is asleep. press space to get more food and wake him up")
    if(keyDown("space")){
      foodCount = 10
    }
  }
  
 

}



