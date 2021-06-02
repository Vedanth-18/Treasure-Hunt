var bg,bg2,form,system,code,security;
var score=0;
var fontStyle, fontStyle2, fontStyle3;
var visual, visualTwo;
function preload() {
 
  
  bg= loadImage("aladdin_cave.jpg")
  bg2 = loadImage("treasure.webp");
  fontStyle = loadFont("Font1.ttf");
  fontStyle2 = loadFont("Font2.ttf");
  fontStyle3 = loadFont("Font3.ttf");
  visual = loadImage("visual.png");
  visualTwo = loadImage("VisualTwo.png");
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
  
  
  
}

function draw() {
  background(bg);
  clues();
  image(visual, 7, 330, 240, 180);
  image(visualTwo, 160, 300, 200, 180);
  push();
  fill("#000000");
  textFont(fontStyle3);
  textSize(10);
  textStyle(BOLD);
  text("FIND THE CODE!", 235, 395);
  pop();
  security.display();
  textSize(20);
  fill("white");
  textFont(fontStyle);
  text("Score: " + score, 450, 50);
  

  if(score === 3) {
    clear()
    background(bg2)
    fill("#ffffff")
    textFont(fontStyle2);
    textSize(60);
    textFont(fontStyle3);
    text("TREASURE UNLOCKED",165, 120);
  }

  drawSprites()
}