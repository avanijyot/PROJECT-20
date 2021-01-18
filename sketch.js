//to create sprite objects
var cat, cat1, cat2, cat3;
var mouse, mouse1, mouse2, mouse3;
var garden, gardenImage;

//to preload images and animations
function preload() {
  
gardenImage = loadImage("images/garden.png");

cat1 = loadImage("images/tomOne.png");
cat2 = loadAnimation("images/tomTwo.png", "images/tomThree.png");
cat3 = loadImage("images/tomFour.png");

mouse1 = loadImage("images/erryOne.png");
mouse2 = loadAnimation("images/jerryTwo.png", "images/jerryThree.png");
mouse3 = loadImage("images/jerryFour.png");

}

function setup(){
    
    //to create the canvas
    createCanvas(1000,800);
    
    //to create the garden
    garden = createSprite(0, 0, 1000, 800);
    garden.addImage("garden", gardenImage);
    
    //to create the cat
    cat = createSprite(800, 600, 20, 40);
    cat.addImage("cat1", cat1);

    //to create the mouse
    mouse = createSprite(1200, 600, 20, 20);
    mouse.addImage("mouse1", mouse1);

}

function draw() {

    //to give background
    background("white");
  
    //to show the collision between cat and mouse
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.addImage("cat3", cat3);
        cat.changeImage("cat3");

        mouse.addImage("mouse3", mouse3);
        mouse.changeImage("mouse3");
    }

    //function keyPressed
    keyPressed();

    //to draw the objects
    drawSprites();
}


function keyPressed(){

if(keyCode === LEFT_ARROW){
    cat.velocityX = -5;
    cat.addAnimation("catRunning", cat2);
    cat.changeAnimation("catRunning");

    mouse.addAnimation("mouseTeasing", mouse2);
    mouse.addAnimation("mouseTeasing");
}

}
